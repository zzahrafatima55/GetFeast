import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const NOTIFY_TO = "safiyaanis297@gmail.com";
const SENDER_DISPLAY_NAME = "Genfeat Events";

const inputSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  companyName: z.string().min(1),
  position: z.string().min(1),
  email: z.string().email(),
  mobileNumber: z.string().min(1),
  needsShuttle: z.boolean(),
});

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  console.log("========== EMAIL DEBUG ==========");
  console.log("GMAIL_USER:", user);
  console.log("GMAIL_APP_PASSWORD exists:", !!pass);
  console.log("=================================");

  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars. Add them to your .env file."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

export const sendRegistrationEmails = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(async ({ data }) => {
    console.log("🔥 SEND REGISTRATION FUNCTION CALLED");
    console.log("Registration data:", {
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      position: data.position,
      email: data.email,
      mobileNumber: data.mobileNumber,
      needsShuttle: data.needsShuttle,
    });

    const fullName = `${data.firstName} ${data.lastName}`;

    const organizerHtml = `
      <h2>New registration received</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.mobileNumber}</p>
      <p><strong>Needs shuttle:</strong> ${
        data.needsShuttle ? "Yes" : "No"
      }</p>
    `;

    try {
      console.log("📧 Creating Gmail transporter...");

      const transporter = getTransporter();
      const user = process.env.GMAIL_USER;

      console.log("📤 Sending email...");
      console.log("From:", user);
      console.log("To:", NOTIFY_TO);

      const result = await transporter.sendMail({
        from: `"${SENDER_DISPLAY_NAME}" <${user}>`,
        to: NOTIFY_TO,
        subject: `New registration: ${fullName}`,
        html: organizerHtml,
      });

      console.log("✅ EMAIL SENT SUCCESSFULLY");
      console.log("Message ID:", result.messageId);

      return {
        ok: true,
        messageId: result.messageId,
      };
    } catch (err) {
      console.error("❌ [registration-email] Failed to send:", err);

      return {
        ok: false,
        error: String(err),
      };
    }
  });
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
    auth: { user, pass },
  });
}

export const sendRegistrationEmails = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(async ({ data }) => {
    console.log("🔥 SEND REGISTRATION FUNCTION CALLED");
    console.log("Registration data:", data);

    const fullName = `${data.firstName} ${data.lastName}`;

    const organizerHtml = `
      <h2>New registration received</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.mobileNumber}</p>
      <p><strong>Needs shuttle:</strong> ${data.needsShuttle ? "Yes" : "No"}</p>
    `;

    let emailOk = false;
    let sheetOk = false;

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
      emailOk = true;
    } catch (err) {
      console.error("❌ [registration-email] Failed to send email:", err);
    }

    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    console.log("========== SHEETS DEBUG ==========");
    console.log("GOOGLE_SHEETS_WEBHOOK_URL exists:", !!sheetsUrl);
    console.log("===================================");

    if (sheetsUrl) {
      try {
        console.log("📊 Sending data to Google Sheet...");
        const response = await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        sheetOk = response.ok;
        console.log("📊 Sheets response status:", response.status);
        const responseText = await response.text();
        console.log("📊 Sheets response body:", responseText);
      } catch (err) {
        console.error("❌ [registration-email] Failed to log to Google Sheet:", err);
      }
    } else {
      console.warn("⚠️ GOOGLE_SHEETS_WEBHOOK_URL not set, skipping sheet log");
    }

    return { ok: emailOk, sheetOk };
  });
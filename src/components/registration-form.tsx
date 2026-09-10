import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { sendRegistrationEmails } from "@/lib/registration-email.server";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  companyName: z.string().trim().min(1, "Company name is required").max(120),
  position: z.string().trim().min(1, "Position is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  mobileNumber: z.string().trim().min(6, "Enter a valid mobile number").max(30),
  needsShuttle: z.enum(["yes", "no"]),
});

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";
const labelClass = "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground";

const empty = {
  firstName: "",
  lastName: "",
  companyName: "",
  position: "",
  email: "",
  mobileNumber: "",
  needsShuttle: "no",
};

export function RegistrationForm() {
  const [values, setValues] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof empty) => (event: { target: { value: string } }) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const data = parsed.data;
    const { error } = await supabase.from("registrations").insert({
      first_name: data.firstName,
      last_name: data.lastName,
      company_name: data.companyName,
      position: data.position,
      email: data.email,
      mobile_number: data.mobileNumber,
      needs_shuttle: data.needsShuttle === "yes",
    });
    setSubmitting(false);

    if (error) {
      toast.error("We couldn't submit your registration. Please try again.");
      return;
    }

    setValues(empty);
    setDone(true);
    toast.success("Registration received — we'll be in touch shortly.");

    // Fire-and-forget: don't block the success state on email delivery.
    sendRegistrationEmails({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        position: data.position,
        email: data.email,
        mobileNumber: data.mobileNumber,
        needsShuttle: data.needsShuttle === "yes",
      },
    }).catch((err) => {
      console.error("Failed to send registration emails:", err);
    });
  }

  if (done) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <h3 className="text-xl font-semibold text-ink">Thank you for registering</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your seat request has been received. A confirmation with the final details will follow by
          email. For any changes, write to us at{" "}
          <a className="font-medium text-primary" href="mailto:yasir@genfeat.com">
            yasir@genfeat.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Register another guest
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            className={fieldClass}
            value={values.firstName}
            onChange={set("firstName")}
            maxLength={80}
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            className={fieldClass}
            value={values.lastName}
            onChange={set("lastName")}
            maxLength={80}
            autoComplete="family-name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="companyName">
            Company name
          </label>
          <input
            id="companyName"
            className={fieldClass}
            value={values.companyName}
            onChange={set("companyName")}
            maxLength={120}
            autoComplete="organization"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="position">
            Position
          </label>
          <input
            id="position"
            className={fieldClass}
            value={values.position}
            onChange={set("position")}
            maxLength={120}
            autoComplete="organization-title"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email ID
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            value={values.email}
            onChange={set("email")}
            maxLength={255}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobileNumber">
            Mobile number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            className={fieldClass}
            value={values.mobileNumber}
            onChange={set("mobileNumber")}
            maxLength={30}
            autoComplete="tel"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="needsShuttle">
            Need shuttle bus
          </label>
          <select
            id="needsShuttle"
            className={fieldClass}
            value={values.needsShuttle}
            onChange={set("needsShuttle")}
          >
            <option value="yes">Yes — reserve a seat from Olaya (15:15)</option>
            <option value="no">No — I will arrive on my own</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Submitting…" : "Confirm my attendance"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Seats are limited and confirmed on a first-come basis.
      </p>
    </form>
  );
}

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ReferFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitReferral(
  _prev: ReferFormState,
  formData: FormData
): Promise<ReferFormState> {
  const yourName = formData.get("yourName") as string;
  const yourEmail = formData.get("yourEmail") as string;
  const businessName = formData.get("businessName") as string;
  const ownerName = formData.get("ownerName") as string;
  const message = formData.get("message") as string;

  if (!yourName || !yourEmail || !businessName || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const { error } = await resend.emails.send({
    from: "Ironmark Capital <noreply@ironmark.capital>",
    to: "info@ironmark.capital",
    replyTo: yourEmail,
    subject: `New referral from ${yourName} — ${businessName}`,
    text: [
      `Referrer: ${yourName}`,
      `Referrer Email: ${yourEmail}`,
      `Business Name: ${businessName}`,
      ownerName ? `Owner Name: ${ownerName}` : null,
      ``,
      `Details:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}

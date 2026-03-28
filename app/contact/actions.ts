"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const business = formData.get("business") as string;
  const revenue = formData.get("revenue") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const { error } = await resend.emails.send({
    from: "Ironmark Capital <noreply@ironmark.capital>",
    to: "info@ironmark.capital",
    replyTo: email,
    subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      business ? `Business: ${business}` : null,
      revenue ? `Revenue: ${revenue}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return { status: "error", message: `Debug: ${error.name} — ${error.message}` };
  }

  return { status: "success" };
}

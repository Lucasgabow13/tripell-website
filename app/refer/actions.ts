"use server";

export type ReferFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitReferral(
  _prev: ReferFormState,
  formData: FormData
): Promise<ReferFormState> {
  const yourName = formData.get("yourName");
  const yourEmail = formData.get("yourEmail");
  const businessName = formData.get("businessName");
  const message = formData.get("message");

  if (!yourName || !yourEmail || !businessName || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  // TODO: wire up email/CRM delivery
  return { status: "success" };
}

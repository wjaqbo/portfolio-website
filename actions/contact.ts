"use server";

import { contactSchema, ContactActionResponse } from "@/lib/schemas/contact";
import { sleep } from "@/lib/utils/sleep";

export async function createMessage(
  state: ContactActionResponse,
  formData: FormData,
): Promise<ContactActionResponse> {
  const data = Object.fromEntries(formData);
  const validated = await contactSchema.safeParseAsync(data);
  const errors: Record<string, string> = {};

  await sleep(1000);

  if (!validated.success) {
    validated.error.issues.map((issue) => {
      errors[String(issue.path[0])] = issue.message;
    });
    console.log("errors", errors);
  }

  if (validated.success) {
    const newMessage = validated.data;

    // process.env.N8N_WEBHOOK_URL!
    const res = await fetch(
      "http://localhost:5678/webhook/f1be1f08-43a4-4968-ae5e-b48d93e9d58a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://portfolio.qbagency.fun/",
        },
        body: JSON.stringify(newMessage),
      },
    );

    if (!res.ok) throw new Error("Failed to webhook submit");

    console.log("New message:", newMessage);
    return {
      success: true,
      data: newMessage,
    };
  }

  return {
    success: false,
    errors,
  };
}

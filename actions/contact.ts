"use server";

import { contactSchema, ContactActionResponse } from "@/lib/schemas/contact";
import { sleep } from "@/lib/utils/sleep";

export async function createMessage(
  state: ContactActionResponse,
  formData: FormData,
): Promise<ContactActionResponse> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  await sleep(1000);

  const validated = contactSchema.safeParse({
    name: name,
    email: email,
    message: message,
  });
  const errors: Record<string, string> = {};

  if (!validated.success) {
    validated.error.issues.map((issue) => {
      errors[String(issue.path[0])] = issue.message;
    });
    console.log("errors", errors);
    console.log("state", state);
  }
  if (validated.success) {
    const newMessage = validated.data;
    console.log("New message:", newMessage);
    console.log("errors", errors);
    console.log("state", state);
    return {
      data: newMessage,
      success: true,
    };
  }

  return {
    success: false,
    errors,
  };
}

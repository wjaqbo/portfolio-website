import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.email(),
  message: z
    .string()
    .min(2, "Message must be at least 2 characters.")
    .max(200, "Message must be at most 200 characters."),
});

export type ContactDataType = z.infer<typeof contactSchema>;

export type ContactActionResponse = {
  data?: ContactDataType;
  errors?: Record<string, string>;
  success: boolean;
};

export const formInitialState: ContactActionResponse = {
  data: { name: "", email: "", message: "" },
  success: false,
  errors: {},
};

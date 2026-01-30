import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(32, "Name must be at most 32 characters."),
    email: z.email(),
    message: z
      .string()
      .min(2, "Message must be at least 2 characters.")
      .max(200, "Message must be at most 200 characters."),
  })
  .superRefine(async (data, ctx) => {
    // ✅ Extra server-only validation: Check if email already exists
    // const existingUser = await db.user.findUnique({
    //   where: { email: data.email },
    // });
    const existingUser = data.email === "dupa@wp.pl";

    if (existingUser) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is already registered.",
        path: ["email"],
      });
    }
  });

export type ContactDataType = z.infer<typeof contactSchema>;

export type ContactActionResponse = {
  success: boolean;
  data?: ContactDataType;
  errors?: Record<string, string>;
};

export const formInitialState: ContactActionResponse = {
  success: false,
  data: { name: "", email: "", message: "" },
  errors: {},
};

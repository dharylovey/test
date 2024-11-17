import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  subject: z
    .string({ message: "Subject is required" })
    .min(10, "Subject must be at least 10 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string({ message: "Message is required" })
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message must be less than 500 characters"),
});

export type Contact = z.infer<typeof contactSchema>;

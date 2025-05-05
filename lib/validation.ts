import { z } from "zod";

export const UserFormValidation = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(50, {
            message: "Name must be at most 50 characters.",
        }),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phone), {
        message: "Invalid phone number",
    }),
});

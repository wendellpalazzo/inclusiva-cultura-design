import { z } from "zod";

const defaultRequiredMsg = "Este campo é obrigatório";

export const contactSchema = z.object({
  name: z.string().min(1, defaultRequiredMsg),
  email: z
    .string()
    .min(1, defaultRequiredMsg)
    .email({ message: "Este email não é válido" }),
  subject: z.string().min(1, defaultRequiredMsg),
  message: z.string().min(1, defaultRequiredMsg)
});

export type ContactSchema = z.infer<typeof contactSchema>;

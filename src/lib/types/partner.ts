import { z } from "zod";

const defaultRequiredMsg = "Este campo é obrigatório";

export const partnerships = [
  "Patrocínio de Projetos",
  "Doação de Produtos/Serviços",
  "Contratação de Pessoas Surdas",
  "Marketing Relacionado à Causa",
  "Voluntariado Corporativo",
  "Tradução, Interpretação e Guia-Interpretação de Libras/Lingua Portuguesa",
] as const;

export const partnerSchema = z.object({
  name: z.string().min(1, defaultRequiredMsg),
  responsible: z.string().min(1, defaultRequiredMsg),
  role: z.string().min(1, defaultRequiredMsg),
  email: z
    .string()
    .min(1, defaultRequiredMsg)
    .email({ message: "Este email não é válido" }),
  phone: z.string().min(15, defaultRequiredMsg),
  partnership_type: z.enum(partnerships, {
    required_error: "Selecione um tipo de parceria",
  }),
  message: z.string().min(1, defaultRequiredMsg),
});

export type PartnerSchema = z.infer<typeof partnerSchema>;

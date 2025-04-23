import { z } from "zod";
import { formatBytes } from "./utils.js";

export const VOLUNTEER_MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
export const VOLUNTEER_ACCEPTED_FILE_TYPES = ["application/pdf"];

export const areas = [
  "Educação e Ensino",
  "Interpretação",
  "Administrativo",
  "Atividades Culturais",
  "Desenvolvimento Pessoal",
] as const;

export const disponibilidades = [
  "Uma vez por semana",
  "Duas vezes por semana",
  "Mais de duas vezes por semana",
  "Apenas em eventos específicos",
  "Trabalho Remoto",
] as const;

export const experiencias = [
  "Nenhuma experiência - Mas estou a disposição para aprender e somar!",
  "Conhecimento básico",
  "Conhecimento intermediário",
  "Conhecimento avançado",
] as const;

export const volunteerFormSchema = z
  .object({
    nome: z
      .string()
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    telefone: z.string().min(10, { message: "Telefone inválido" }),
    area: z.enum(areas, { required_error: "Selecione uma área de interesse" }),
    disponibilidade: z.enum(disponibilidades, {
      required_error: "Selecione sua disponibilidade",
    }),
    experiencia: z.enum(experiencias, {
      required_error: "Selecione seu nível de experiência",
    }),
    experiencia_libras: z.string(),
    experiencia_libras_opcoes: z.string(),
    porque_ser_voluntario: z
      .string()
      .min(10, { message: "Conte-nos um pouco mais sobre você" }),
    proposta_acao: z.instanceof(File).optional(),
    antecedentes_criminais: z
      .instanceof(File, {
        message: `Arquivo não suportado`,
      })
      .refine(
        (file) => file && file.size <= VOLUNTEER_MAX_FILE_SIZE,
        `O arquivo deve ter um tamanho de até ${formatBytes(VOLUNTEER_MAX_FILE_SIZE)} e em PDF.`,
      )
      .refine(
        (file) => file && VOLUNTEER_ACCEPTED_FILE_TYPES.includes(file.type),
        "Apenas arquivos PDF.",
      ),
  })
  .superRefine((data, ctx) => {
    if (data.experiencia_libras === "Sim" && !data.experiencia_libras_opcoes)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "É necessário seu relato das experiências",
        path: ["experiencia_libras_opcoes"],
        fatal: true,
      });

    if (data.area === "Educação e Ensino") {
      if (!data.proposta_acao || data.proposta_acao.size === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Para área de educação e ensino, envie-nos a sua proposta de ensino",
          path: ["proposta_acao"],
          fatal: true,
        });
      }
      if (
        data.proposta_acao &&
        data.proposta_acao.size > VOLUNTEER_MAX_FILE_SIZE
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `O arquivo deve ter um tamanho de até ${formatBytes(VOLUNTEER_MAX_FILE_SIZE)}`,
          path: ["proposta_acao"],
          fatal: true,
        });
      }
      if (
        data.proposta_acao &&
        !VOLUNTEER_ACCEPTED_FILE_TYPES.includes(data.proposta_acao?.type)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `O arquivo deve ser no formato PDF`,
          path: ["proposta_acao"],
          fatal: true,
        });
      }
    }
  })
  .transform((o) => ({
    [VolunteerFormFieldGForm.nome]: o.nome,
    [VolunteerFormFieldGForm.email]: o.email,
    [VolunteerFormFieldGForm.telefone]: o.telefone,
    [VolunteerFormFieldGForm.area]: o.area,
    [VolunteerFormFieldGForm.disponibilidade]: o.disponibilidade,
    [VolunteerFormFieldGForm.experiencia]: o.experiencia,
    [VolunteerFormFieldGForm.experiencia_libras]: o.experiencia_libras,
    [VolunteerFormFieldGForm.experiencia_libras_opcoes]:
      o.experiencia_libras_opcoes,
    [VolunteerFormFieldGForm.porque_ser_voluntario]: o.porque_ser_voluntario,
    [VolunteerFormFieldGForm.proposta_acao]: o.proposta_acao,
    [VolunteerFormFieldGForm.antecedentes_criminais]: o.antecedentes_criminais,
  }));

export const VolunteerFormFieldGForm = {
  proposta_acao: "entry.364641398",
  antecedentes_criminais: "entry.893983540",
  nome: "entry.134596576",
  email: "entry.955295405",
  telefone: "entry.33108753",
  area: "entry.363124435",
  disponibilidade: "entry.789184766",
  experiencia: "entry.2057839105",
  experiencia_libras: "entry.909386888",
  experiencia_libras_opcoes: "entry.1089486152",
  porque_ser_voluntario: "entry.418315608",
};
export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

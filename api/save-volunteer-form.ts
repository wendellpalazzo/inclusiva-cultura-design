import { Buffer } from "buffer";
import { z } from "zod";

const VOLUNTEER_MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const VOLUNTEER_ACCEPTED_FILE_TYPES = ["application/pdf"];

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const areas = [
  "Educação e Ensino",
  "Interpretação",
  "Administrativo",
  "Atividades Culturais",
  "Desenvolvimento Pessoal",
] as const;

const disponibilidades = [
  "Uma vez por semana",
  "Duas vezes por semana",
  "Mais de duas vezes por semana",
  "Apenas em eventos específicos",
  "Trabalho Remoto",
] as const;

const experiencias = [
  "Nenhuma experiência - Mas estou a disposição para aprender e somar!",
  "Conhecimento básico",
  "Conhecimento intermediário",
  "Conhecimento avançado",
] as const;

const volunteerFormSchema = z
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

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const VolunteerFormFieldGForm = {
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

export async function POST(request: Request) {
  const formData = await request.formData();
  let data = Object.fromEntries(formData.entries());
  const proposta_acao = formData.get(
    VolunteerFormFieldGForm.proposta_acao,
  ) as File;
  const antecedentes_criminais = formData.get(
    VolunteerFormFieldGForm.antecedentes_criminais,
  ) as File;

  try {
    if (proposta_acao) {
      const arrayBuffer = await proposta_acao.arrayBuffer();
      const base64String = Buffer.from(arrayBuffer).toString("base64");

      const resProposta = await uploadToDrive({
        typeDoc: "voluntariado",
        filename: `proposta_acao-${formData.get(VolunteerFormFieldGForm.nome)?.toString().toLowerCase()}`,
        mimeType: proposta_acao.type,
        data: base64String,
      });
      const propostaJson = await resProposta.json();
      if (propostaJson.error) {
        return new Response("Internal Server Error proposta_acao", {
          status: 500,
        });
      }
      if (propostaJson.fileurl) {
        data[VolunteerFormFieldGForm.proposta_acao] = propostaJson.fileurl;
      }
    }
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error proposta_acao", { status: 500 });
  }

  try {
    if (antecedentes_criminais) {
      const arrayBuffer = await antecedentes_criminais.arrayBuffer();
      const base64String = Buffer.from(arrayBuffer).toString("base64");

      const resAntecedentes = await uploadToDrive({
        typeDoc: "voluntariado",
        filename: `antecedentes_criminais-${formData.get(VolunteerFormFieldGForm.nome)?.toString().toLowerCase()}`,
        mimeType: antecedentes_criminais.type,
        data: base64String,
      });
      const antecedentesJson = await resAntecedentes.json();
      if (antecedentesJson.error) {
        return new Response("Internal Server Error antecedentes_criminais", {
          status: 500,
        });
      }
      if (antecedentesJson.fileurl) {
        data[VolunteerFormFieldGForm.antecedentes_criminais] =
          antecedentesJson.fileurl;
      }
    }
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error antecedentes_criminais", {
      status: 500,
    });
  }

  const formPostUrl =
    "https://docs.google.com/forms/d/e/" +
    process.env.G_FORM_ID +
    "/formResponse?submit=Submit&usp=pp_url&";

  try {
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, String(value)]),
      ),
    );

    const res = await fetch(`${formPostUrl}${searchParams}`);

    if (!res.ok) throw res;

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

async function uploadToDrive(payload: VolunteerFormValues) {
  const url =
    "https://script.google.com/macros/s/AKfycbwrAoxOdldggh7H0r1w_-exut9jbXbH_t3dSUTImLrpJP0ON1itCJ7YAVP355a66wJg/exec";
  try {
    const res = await fetch(url, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Length": JSON.stringify(payload).length.toString(),
        Host: "script.google.com",
      },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (json.status === "success") return Response.json({ fileurl: json.url });
    else return Response.json({ error: json.message }, { status: 400 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Erro na rede" }, { status: 500 });
  }
}

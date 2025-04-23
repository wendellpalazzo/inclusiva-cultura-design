import { Resend } from "resend";
import { z } from "zod";

const defaultRequiredMsg = "Este campo é obrigatório";

let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en" dir="ltr" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no"><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG></o:AllowPNG><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><style tailwind>/* layer: preflights */
/* layer: shortcuts */
.je-kzy1i8{text-align:center;color:rgb(15,23,42);font-weight:700;}</style></head><body style="background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,&#x22;Segoe UI&#x22;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&#x22;Helvetica Neue&#x22;,sans-serif"><div data-skip="true" style="display:none;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">Um contato de parceria feito pelo site<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div></div><div style="table-layout:fixed;width:100%"><div style="margin:0 auto;max-width:600px"><span><!--[if mso]><table align="center" width="600" style="border-spacing: 0; width:600px;" role="presentation"><tr><td><![endif]--></span><table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width:600px"><tbody><tr style="width:100%"><td align="center"><table align="center" width="100%" style="border:1px solid rgb(0,0,0, 0.1);border-radius:3px;overflow:hidden" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td><table align="center" width="100%" style="padding:20px 40px;padding-bottom:0" role="presentation" cellspacing="0" cellpadding="0" border="0"><tbody style="width:100%"><tr style="width:100%"><td><h1 class="je-kzy1i8" style>Um novo contato de parceria realizado no site institutomaosdeouro.org.br</h1><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Nome da Empresa: </b>#name</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Nome do Responsável: </b>#responsible</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Cargo: </b>#role</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Email: </b>#email</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Telefone: </b>#phone</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Tipo de Parceria: </b>#partnership_type</p><p style="font-size:16px;line-height:24px;margin:16px 0"><b>Mensagem: </b>#message</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><span><!--[if mso]></td></tr></table><![endif]--></span></div></div></body></html>`;

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

const partnerSchemaWithRecaptcha = partnerSchema.extend({
  t: z.string(),
});

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const toMail = process.env.VITE_CONTACT_EMAIL;

  const requestBody = await request.json();

  if (typeof requestBody !== "object" || requestBody === null) {
    return new Response("Invalid JSON payload", { status: 400 });
  }

  const { data, error } = partnerSchema.safeParse({
    ...requestBody,
  });

  if (error) {
    return new Response(error?.errors?.[0]?.message || "Erro ao fazer parse", {
      status: 400,
    });
  }

  // const verifyed = await fetch(
  //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER}&response=${data.t}`,
  //   {
  //     method: "POST",
  //   },
  // );

  // if (verifyed.status !== 200)
  //   return new Response("Erro Interno ReCaptcha", { status: 500 });

  // const { success } = (await verifyed.json()) as { success: boolean };

  // if (!success) {
  //   return new Response("Recaptcha no passed", { status: 400 });
  // }

  if (!toMail) {
    return Response.json(
      { error: "Não configurou o email para contato de parcerias" },
      { status: 400 },
    );
  }

  html = html.replace("#name",data.name)
  html = html.replace("#email",data.email)
  html = html.replace("#phone",data.phone)
  html = html.replace("#responsible",data.responsible)
  html = html.replace("#message",data.message)
  html = html.replace("#partnership_type",data.partnership_type)
  html = html.replace("#role",data.role)

  const resendResp = await resend.emails.send({
    from: "Site | I.M.O<mailer@institutomaosdeouro.org.br>",
    to: [toMail],
    subject: "Um novo contato de parceria feito pelo site institutomaosdeouro.org.br",
    html,
  });

  if (resendResp.error) {
    return Response.json({ error: resendResp.error }, { status: 500 });
  }

  return new Response(null, { status: 200 });
}

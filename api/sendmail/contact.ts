import { render } from 'jsx-email';
import { Template } from "../_lib/mail/contact-form.js";
import { Resend } from "resend";
import { contactSchema } from "../_lib/contact.js";
import { z } from "zod";

const contactSchemaWithRecaptcha = contactSchema.extend({
  t: z.string(),
});

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const toMail = process.env.VITE_CONTACT_EMAIL;

  const requestBody = await request.json();

  if (typeof requestBody !== "object" || requestBody === null) {
    return new Response("Invalid JSON payload", { status: 400 });
  }

  const { data, error } = contactSchemaWithRecaptcha.safeParse({
    ...requestBody,
  });

  if (error) {
    return new Response(error?.errors?.[0]?.message || "Erro ao fazer parse", {
      status: 400,
    });
  }

  const verifyed = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER}&response=${data.t}`,
    {
      method: "POST",
    },
  );

  if (verifyed.status !== 200)
    return new Response("Erro Interno ReCaptcha", { status: 500 });

  const { success } = (await verifyed.json()) as { success: boolean };

  if (!success) {
    return new Response("Recaptcha no passed", { status: 400 });
  }

  if (!toMail) {
    return Response.json(
      { error: "Não configurou o email para contato" },
      { status: 400 },
    );
  }

  const html = await render(Template({ ...data }));

  const resendResp = await resend.emails.send({
    from: "Site | I.M.O<mailer@institutomaosdeouro.org.br>",
    to: [toMail],
    subject: "Um novo contato feito pelo site institutomaosdeouro.org.br",
    html,
  });

  if (resendResp.error) {
    return Response.json({ error: resendResp.error }, { status: 500 });
  }
  // console.log("deu certo");
  return new Response(null, { status: 200 });
}

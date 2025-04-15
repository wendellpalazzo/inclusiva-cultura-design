import { Template } from "../src/mail/contact-form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toMail = "wendell.palazzo@gmail.com";

interface ContactFormSchema {
  email: string;
  message: string;
  name: string;
  phone: string;
}

export async function GET(request: Request) {
  const { email, message, name, phone } =
    (await request.json()) as ContactFormSchema;
  try {
    if (!toMail) {
      return Response.json(
        { error: "Não configurou o email para contato" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Site | I.M.O<mailer@mailer.institutomaosdeouro.org.br>",
      to: [toMail],
      subject: "Um novo contato feito pelo site institutomaosdeouro.org.br",
      react: Template({ name, message, email, phone }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

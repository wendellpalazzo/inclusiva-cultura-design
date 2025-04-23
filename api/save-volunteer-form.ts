import { Buffer } from "buffer";
import { VolunteerFormFieldGForm, VolunteerFormValues} from "./_volunteer.js";

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
    "https://docs.google.com/forms/d/e/"+process.env.G_FORM_ID+"/formResponse?submit=Submit&usp=pp_url&";

  try {
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, String(value)])
      )
    )

    const res = await fetch(`${formPostUrl}${searchParams}`);

    if(!res.ok) throw res

    return new Response(null, { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

async function uploadToDrive(payload:VolunteerFormValues) {
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

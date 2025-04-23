import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "jsx-email";

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

export const TemplateName = "Partnership Contact Form Template";

export const Template = ({
  name = "",
  responsible = "",
  role = "",
  phone = "",
  email = "",
  partnership_type = "",
  message = "",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Um contato de parceria feito pelo site</Preview>
      <Tailwind production={process.env.MODE !== "development"} config={{}}>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading className="text-slate-900 text-center font-bold">
                    Um novo contato de parceria realizado no site institutomaosdeouro.org.br
                  </Heading>

                  <Text style={paragraph}>
                    <b>Nome da Empresa: </b>
                    {name || "#name"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Nome do Responsável: </b>
                    {responsible || "#responsible"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Cargo: </b>
                    {role || "#role"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Email: </b>
                    {email || "#email"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Telefone: </b>
                    {phone || "#phone"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Tipo de Parceria: </b>
                    {partnership_type || "#partnership_type"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Mensagem: </b>
                    {message || "#message"}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

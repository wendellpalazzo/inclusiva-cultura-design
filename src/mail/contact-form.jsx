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

export const TemplateName = "Contact Form Template";

export const Template = ({
  email = "",
  message = "",
  name = "",
  phone = "",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Um contato feito pelo site</Preview>
      <Tailwind production={process.env.MODE !== "development"} config={{}}>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    className="text-slate-900 text-center font-bold"
                  >
                    Um novo contato realizado no site institutomaosdeouro.org.br
                  </Heading>

                  <Text style={paragraph}>
                    <b>Nome: </b>
                    {name}
                  </Text>
                  <Text style={paragraph}>
                    <b>Email: </b>
                    {email}
                  </Text>
                  <Text style={paragraph}>
                    <b>Telefone: </b>
                    {phone || "Não informado"}
                  </Text>
                  <Text style={paragraph}>
                    <b>Mensagem: </b>
                    {message}
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

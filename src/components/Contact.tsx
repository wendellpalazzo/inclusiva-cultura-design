import { MessageSquare, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchema } from "@/lib/types/contact";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { generateRecaptchaToken } from "@/lib/recaptcha";

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (dataForm: ContactSchema) => {
    let formData = { ...dataForm } as typeof dataForm & { t?: string };

    formData.t = await generateRecaptchaToken({
      token: import.meta.env.VITE_RECAPTCHA,
      action: "form_contact_submit",
    });

    const res = await fetch("/api/sendmail/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      toast({
        title: "Erro ao enviar o formulário",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Formulário enviado com sucesso!",
      description: "Agradecemos seu contato. Entraremos em contato em breve.",
    });

    form.reset();
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-white to-gray-100 scroll-my-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">
            Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações sobre nossos
            projetos, parcerias ou como podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-earth/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-earth mb-6">
              Envie-nos uma mensagem
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                        Nome *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                        Assunto *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                        Mensagem *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          {...field}
                          className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {form.formState.isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <MessageSquare size={20} />
                  )}
                  Enviar Mensagem
                </Button>
                <div className="text-muted text-xs">
                  Este site é protegido pelo reCAPTCHA e o Google<br/>
                  <a href="https://policies.google.com/privacy">
                  {" "}Política de Privacidade
                  </a>{" "}
                  e
                  <a href="https://policies.google.com/terms">
                  {" "}Termos de Serviço
                  </a>{" "}
                  aplicados.
                </div>
              </form>
            </Form>
          </div>

          <div>
            <div className="bg-primary/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-earth mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-2 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-earth mb-1">
                      Telefone / WhatsApp
                    </h4>
                    <p className="text-dark/80">
                      {import.meta.env.VITE_CONTACT_PHONE}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-2 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="break-all">
                    <h4 className="font-bold text-earth mb-1">Email</h4>
                    <p className="text-dark/80">
                      {import.meta.env.VITE_CONTACT_EMAIL}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-2 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-earth mb-1">Endereço</h4>
                    <p className="text-dark/80">
                      Rua Duque de Caxias, 184 - Centro
                      <br />
                      Breves - PA, 68800-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-80 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15476.244489946484!2d-50.48185609027021!3d-1.6865712130664778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x929839ad6446f7ab%3A0xa90502c5cedd0365!2sM%C3%A3os%20de%20Ouro%20%2F%20SEDE!5e1!3m2!1spt-BR!2sbr!4v1742016159452!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Mãos de Ouro"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

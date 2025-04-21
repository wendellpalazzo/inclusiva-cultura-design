import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Heart,
  Loader2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZapButton } from "@/components/ZapButton";
import Seo from "@/lib/seo";
import SectionTitle from "@/components/SectionTitle";
import {
  areas,
  disponibilidades,
  experiencias,
  VOLUNTEER_MAX_FILE_SIZE,
  volunteerFormSchema,
  VolunteerFormValues,
} from "@/lib/types/volunteer";
import { formatters } from "@/lib/strings";

const Volunteer = () => {
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);

  const form = useForm<
    z.input<typeof volunteerFormSchema>,
    unknown,
    z.output<typeof volunteerFormSchema>
  >({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      nome: "Teste",
      email: "teste@teste.com",
      telefone: "64993004045",
      area: "Educação e Ensino",
      disponibilidade: "Uma vez por semana",
      experiencia: "Nenhuma experiência - Mas estou a disposição para aprender e somar!",
      experiencia_libras: "Sim",
      experiencia_libras_opcoes: "lorem ipsum sit amet",
      porque_ser_voluntario: "lorem ipsum sit amet",
    },
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    const formData = new FormData();

    Object.entries(data).forEach((e) => {
      if (e[1] !== undefined) {
        formData.append(e[0], e[1]);
      }
    });

    const res = await fetch("/api/save-volunteer-form", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      toast({
        title: "Erro ao enviar formulário",
        description:
          "Houve um erro ao enviar seu formulário. Tente novamente mais tarde.",
      });
      return;
    }

    toast({
      title: "Formulário enviado com sucesso!",
      description:
        "Agradecemos seu interesse em ser voluntário. Entraremos em contato em breve.",
    });
    setSuccess(true);
    form.reset();
  };
  return (
    <>
      <Seo
        title="Voluntarie-se"
        description="Seja um voluntário - Compartilhe seu tempo, conhecimento e habilidades para transformar vidas na comunidade surda. Junte-se a nós nessa missão!"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Voluntarie-se | Instituto Mãos de Ouro",
          url: "https://institutomaosdeouro.org.br/voluntarie-se",
        }}
      />
      <div className="min-h-dvh flex flex-col">
        {/* Modified Header for Doe Page */}
        <Header />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-dark text-white py-20 relative overflow-hidden animate-fadeIn">
            {/* Background pattern */}
            <div className="mix-blend-overlay hidden md:block absolute inset-0 bg-[url('/assets/images/escola-e-comunidade-parceria-getty-images.jpg')] bg-no-repeat bg-top bg-cover opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
              <Link
                to="/#como-ajudar"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" /> Voltar para Como Ajudar
              </Link>

              <div className="text-center max-w-4xl mx-auto">
                <Heart
                  size={60}
                  className="mx-auto mb-6 text-primary md:hidden"
                />
                <h1 className="text-4xl md:text-7xl font-bold font-playfair text-white mb-6 relative">
                  Seja um{" "}
                  <span className="text-primary relative">
                    Voluntário
                    <svg
                      className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                      viewBox="0 0 100 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,1 Q50,10 100,1"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>
                <div className="w-20 h-1 mx-auto mb-8"></div>
                <p className="text-xl text-white/90 mb-10 text-balance">
                  Compartilhe seu tempo, conhecimento e habilidades para
                  transformar vidas na comunidade surda. Junte-se a nós nessa
                  missão!
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white" data-aos="fade-up">
            <div className="container">
              <div className="mb-12 text-center">
                <SectionTitle
                  title="Por que ser voluntário?"
                  subtitle="Ser voluntário no Instituto Mãos de Ouro é uma oportunidade de
                  contribuir para uma sociedade mais inclusiva enquanto você
                  também se desenvolve."
                  centered
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                    Impacto Social
                  </h3>
                  <p className="text-dark/80">
                    Sua contribuição faz diferença real na vida de pessoas
                    surdas, proporcionando mais oportunidades de desenvolvimento
                    e inclusão.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                    Novas Habilidades
                  </h3>
                  <p className="text-dark/80">
                    Aprenda Libras e desenvolva novas competências enquanto
                    compartilha seus conhecimentos em um ambiente colaborativo.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                    Aprendizado Contínuo
                  </h3>
                  <p className="text-dark/80">
                    Experiência enriquecedora que amplia sua visão de mundo e
                    proporciona crescimento pessoal e profissional.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Formulário de Inscrição */}
          <section
            id="inscricao"
            className="py-16 bg-primary/5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="container p-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                  Inscreva-se como Voluntário
                </h2>
                <p className="text-lg text-dark/80 max-w-3xl mx-auto">
                  Preencha o formulário abaixo para iniciar o processo de
                  análise ao ingresso no voluntariado.
                </p>
                <div className="h-1 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
              </div>

              <div className="max-w-2xl mx-auto">
                {success ? (
                  <div className="border bg-earth/5 border-primary rounded-lg p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-playfair text-primary mb-2">
                      Inscrição Enviada!
                    </h3>
                    <p className="text-primary mb-6">
                      Agradecemos seu interesse em ser voluntário. Nossa equipe
                      entrará em contato em breve para dar continuidade ao
                      processo.
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary"
                      onClick={() => setSuccess(false)}
                    >
                      Fazer nova inscrição
                    </Button>
                  </div>
                ) : (
                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-2xl font-playfair text-earth">
                        Formulário de Inscrição
                      </CardTitle>
                      <CardDescription className="text-dark/80">
                        Todos os campos com * são obrigatórios
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="nome"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nome completo *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Seu nome completo"
                                      {...field}
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
                                  <FormLabel>E-mail *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder="seu.email@exemplo.com"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="telefone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Telefone *</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="(00) 00000-0000"
                                      {...field}
                                      onChange={(e) => {
                                        e.target.value = formatters.phoneNumber(
                                          e.target.value,
                                        );
                                        field.onChange(e);
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="area"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Área de interesse *</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma área" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {areas.map((area) => (
                                        <SelectItem key={area} value={area}>
                                          {area}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="disponibilidade"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Disponibilidade *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione sua disponibilidade" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {disponibilidades.map((disponib) => (
                                      <SelectItem
                                        key={disponib}
                                        value={disponib}
                                      >
                                        {disponib}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="experiencia"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Experiência com a área de interesse *
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione seu nível de experiência" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {experiencias.map((experiencia) => (
                                      <SelectItem
                                        key={experiencia}
                                        value={experiencia}
                                      >
                                        {experiencia}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  Não é necessário ter experiência prévia.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="experiencia_libras"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Experiência com Libras, comunidade surda,
                                  tradução, interpretação e guia-interpretação?
                                  *
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecione..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Sim">Sim</SelectItem>
                                    <SelectItem value="Não">Não</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {form.watch("experiencia_libras") === "Sim" && (
                            <FormField
                              control={form.control}
                              name="experiencia_libras_opcoes"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Por ter selecionado a opção SIM, relate em
                                    qual ou quais áreas possui experiência *
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea className="min-h-32" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}

                          <FormField
                            control={form.control}
                            name="porque_ser_voluntario"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Por que você quer ser voluntário? *
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Conte-nos sobre suas motivações e o que você espera desta experiência..."
                                    className="min-h-32"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="proposta_acao"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Proposta de ação para área de educação ou
                                  ensino
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="file"
                                    accept="application/pdf"
                                    name={field.name}
                                    id="proposta_acao"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      field.onChange(file);
                                    }}
                                    onBlur={field.onBlur}
                                    ref={field.ref}
                                  />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                  Arquivo em PDF de até{" "}
                                  {VOLUNTEER_MAX_FILE_SIZE / 1024 / 1024} MB
                                </FormDescription>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="antecedentes_criminais"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Envie um arquivo em pdf dos seus antecedentes
                                  criminais (no máximo com 30 dias) *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="file"
                                    accept="application/pdf"
                                    name={field.name}
                                    id="antecedentes_criminais"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      field.onChange(file);
                                    }}
                                    onBlur={field.onBlur}
                                    ref={field.ref}
                                  />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                  Arquivo em PDF de até{" "}
                                  {VOLUNTEER_MAX_FILE_SIZE / 1024 / 1024} MB
                                </FormDescription>
                              </FormItem>
                            )}
                          />

                          <Button
                            disabled={form.formState.isSubmitting}
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-600"
                          >
                            {form.formState.isSubmitting && (
                              <Loader2 className="animate-spin" />
                            )}
                            Enviar inscrição
                          </Button>
                        </form>
                      </Form>
                      <div className="my-8 text-center">
                        <p className="lg:text-lg text-balance">
                          Ficou com alguma dúvida? <br /> Fale conosco ligando
                          para {import.meta.env.VITE_CONTACT_PHONE} <br />
                          ou
                          <br />
                        </p>
                        <ZapButton
                          text="Olá! Gostaria de mais informações em como me voluntariar, poderia me ajudar?"
                          phone={import.meta.env.VITE_CONTACT_ZAP}
                          className="hover:bg-green-700 rounded-xl text-white p-2 bg-green-600 text-sm mt-2 inline-block"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Volunteer;

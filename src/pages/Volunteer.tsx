import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Heart,
  Loader,
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

const areas = [
  {
    id: "educacao",
    nome: "Educação e Ensino",
  },
  {
    id: "interpretacao",
    nome: "Interpretação",
  },
  {
    id: "administrativo",
    nome: "Administrativo",
  },
  {
    id: "cultural",
    nome: "Atividades Culturais",
  },
  {
    id: "desenvolvimento",
    nome: "Desenvolvimento Pessoal",
  },
];

const volunteerFormSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(10, { message: "Telefone inválido" }),
  area: z.string({ required_error: "Selecione uma área de interesse" }),
  disponibilidade: z.string({
    required_error: "Selecione sua disponibilidade",
  }),
  experiencia: z.string().optional(),
  mensagem: z
    .string()
    .min(10, { message: "Conte-nos um pouco mais sobre você" }),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const Volunteer = () => {
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);

  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      experiencia: "",
      mensagem: "",
    },
  });

  const onSubmit = (data: VolunteerFormValues) => {
    console.log(data);
    // Aqui você implementaria a lógica para enviar os dados para um backend
    toast({
      title: "Formulário enviado com sucesso!",
      description:
        "Agradecemos seu interesse em ser voluntário. Entraremos em contato em breve.",
    });
    setSuccess(true);
    form.reset();
  };
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Modified Header for Doe Page */}
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-dark text-white py-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="mix-blend-overlay hidden md:block absolute inset-0 bg-[url('assets/images/escola-e-comunidade-parceria-getty-images.jpg')] bg-no-repeat bg-top bg-cover opacity-40"></div>

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
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6 relative">
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

        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                Por que ser voluntário?
              </h2>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto text-balance">
                Ser voluntário no Instituto Mãos de Ouro é uma oportunidade de
                contribuir para uma sociedade mais inclusiva enquanto você
                também se desenvolve.
              </p>
              <div className="h-1 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
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
                  Sua contribuição faz diferença real na vida de pessoas surdas,
                  proporcionando mais oportunidades de desenvolvimento e
                  inclusão.
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
        <section id="inscricao" className="py-16 bg-primary/5">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                Inscreva-se como Voluntário
              </h2>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto">
                Preencha o formulário abaixo para iniciar seu processo de
                voluntariado.
              </p>
              <div className="h-1 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-playfair text-green-800 mb-2">
                    Inscrição Enviada!
                  </h3>
                  <p className="text-green-700 mb-6">
                    Agradecemos seu interesse em ser voluntário. Nossa equipe
                    entrará em contato em breve para dar continuidade ao
                    processo.
                  </p>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50"
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
                  <CardContent>
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
                                      <SelectItem key={area.id} value={area.id}>
                                        {area.nome}
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
                                  <SelectItem value="uma-vez">
                                    Uma vez por semana
                                  </SelectItem>
                                  <SelectItem value="duas-vezes">
                                    Duas vezes por semana
                                  </SelectItem>
                                  <SelectItem value="mais-vezes">
                                    Mais de duas vezes por semana
                                  </SelectItem>
                                  <SelectItem value="eventos">
                                    Apenas em eventos específicos
                                  </SelectItem>
                                  <SelectItem value="remoto">
                                    Trabalho remoto
                                  </SelectItem>
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
                                Experiência com Libras ou com a comunidade surda
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
                                  <SelectItem value="nenhuma">
                                    Nenhuma experiência
                                  </SelectItem>
                                  <SelectItem value="basico">
                                    Conhecimento básico
                                  </SelectItem>
                                  <SelectItem value="intermediario">
                                    Conhecimento intermediário
                                  </SelectItem>
                                  <SelectItem value="avancado">
                                    Conhecimento avançado
                                  </SelectItem>
                                  <SelectItem value="fluente">
                                    Fluente em Libras
                                  </SelectItem>
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
                          name="mensagem"
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
                      <p className="text-lg text-balance">
                        Ficou com alguma dúvida? <br/> Entre em contato conosco
                        ligando para (91) 9 9291-5134 <br />
                        ou
                        <br />
                      </p>
                      <ZapButton
                        text="Olá! Ainda tenho algumas dúvidas em como me voluntariar, poderia me ajudar?"
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
  );
};

export default Volunteer;

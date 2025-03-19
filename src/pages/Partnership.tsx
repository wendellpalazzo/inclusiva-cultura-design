import React from "react";

import {
  Briefcase,
  Award,
  HandshakeIcon,
  Users,
  Building2,
  Heart,
  Landmark,
  Trophy,
  Rocket,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ZapButton } from "@/components/ZapButton";

const Partnership = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Formulário enviado com sucesso! Entraremos em contato em breve."
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth mb-6">
                Parcerias que Transformam Vidas
              </h1>
              <p className="text-lg text-dark/80 mb-8">
                Junte-se a nós na missão de promover a educação e inclusão de
                pessoas surdas. Sua empresa pode fazer parte dessa transformação
                social e contribuir para um mundo mais acessível e inclusivo.
              </p>
              <div>
                <Button
                  className="bg-primary hover:bg-primary-400 font-medium text-white"
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("como-ajudar")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Quero ser Parceiro
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-primary/20 relative z-10">
                <div className="grid grid-cols-3 gap-4">
                  {[Building2, Landmark, Trophy, Rocket, Award, Heart].map(
                    (Icon, idx) => (
                      <div key={idx} className="flex justify-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                          <Icon className="text-primary w-8 h-8" />
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-opensans font-semibold text-earth mb-2">
                    +30 Empresas Parceiras
                  </h3>
                  <p className="text-dark/80">
                    Fazendo a diferença com a gente
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-primary/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que ser parceiro */}
      <section id="porque-ser-parceiro" className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            title="Por que ser Parceiro?"
            subtitle="As parcerias com empresas são fundamentais para a sustentabilidade de nossos projetos e ampliam o impacto social que podemos gerar juntos."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10 text-primary" />,
                title: "Responsabilidade Social",
                description:
                  "Fortaleça o compromisso da sua empresa com a inclusão social e contribua para uma sociedade mais justa e acessível.",
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Visibilidade da Marca",
                description:
                  "Associe sua marca a uma causa nobre e ganhe reconhecimento como uma empresa socialmente responsável.",
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Engajamento de Colaboradores",
                description:
                  "Promova ações de voluntariado corporativo e aumente o senso de propósito e satisfação de seus colaboradores.",
              },
              {
                icon: <Rocket className="w-10 h-10 text-primary" />,
                title: "Incentivos Fiscais",
                description:
                  "Aproveite os benefícios fiscais disponíveis para empresas que apoiam projetos sociais e culturais.",
              },
              {
                icon: <Building2 className="w-10 h-10 text-primary" />,
                title: "Network Estratégico",
                description:
                  "Conecte-se com outras empresas parceiras e instituições, ampliando sua rede de contatos e oportunidades de negócio.",
              },
              {
                icon: <Heart className="w-10 h-10 text-primary" />,
                title: "Impacto Social Mensurável",
                description:
                  "Receba relatórios detalhados sobre o impacto gerado pela sua contribuição, com dados e histórias reais de transformação.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-opensans font-semibold text-earth mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Parceria */}
      <section id="formas-parceria" className="py-20 bg-primary/10">
        <div className="container">
          <SectionTitle
            title="Formas de Parceria"
            subtitle="Existem diversas maneiras da sua empresa contribuir com nossa missão. Conheça as principais formas de parceria."
            centered
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Patrocínio de Projetos",
                  description:
                    "Apoie financeiramente projetos específicos, como cursos de Libras, oficinas de capacitação profissional ou eventos inclusivos.",
                },
                {
                  title: "Doação de Produtos e Serviços",
                  description:
                    "Doe equipamentos, materiais didáticos, serviços profissionais ou ceda espaços para a realização de nossas atividades.",
                },
                {
                  title: "Contratação de Pessoas Surdas",
                  description:
                    "Abra vagas em sua empresa para profissionais surdos capacitados, promovendo a inclusão no mercado de trabalho.",
                },
                {
                  title: "Marketing Relacionado à Causa",
                  description:
                    "Desenvolva campanhas de marketing que revertam parte das vendas de produtos ou serviços para nossa instituição.",
                },
                {
                  title: "Voluntariado Corporativo",
                  description:
                    "Incentive seus colaboradores a dedicarem tempo e conhecimento como voluntários em nossos projetos e atividades.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary"
                >
                  <h3 className="text-xl font-opensans font-semibold text-earth mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como se tornar parceiro */}
      <section id="como-ajudar" className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            title="Como se tornar parceiro"
            subtitle="O processo para se tornar um parceiro é simples e adaptável às possibilidades da sua empresa."
            centered
          />

          <div className="mt-16 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-1/2 mx-auto">
              <div className="bg-white rounded-xl shadow-md border border-primary/20 overflow-hidden">
                <div className="bg-primary/10 p-4">
                  <h3 className="text-xl font-opensans font-semibold text-earth">
                    Formulário de Contato
                  </h3>
                </div>
                <div className="p-6">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="empresa"
                        className="text-sm font-medium text-earth"
                      >
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="nome"
                          className="text-sm font-medium text-earth"
                        >
                          Nome do Responsável
                        </label>
                        <input
                          type="text"
                          id="nome"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="cargo"
                          className="text-sm font-medium text-earth"
                        >
                          Cargo
                        </label>
                        <input
                          type="text"
                          id="cargo"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-earth"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="telefone"
                          className="text-sm font-medium text-earth"
                        >
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="interesse"
                        className="text-sm font-medium text-earth"
                      >
                        Tipo de Parceria de Interesse
                      </label>
                      <select
                        id="interesse"
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="patrocinio">
                          Patrocínio de Projetos
                        </option>
                        <option value="doacao">
                          Doação de Produtos/Serviços
                        </option>
                        <option value="contratacao">
                          Contratação de Pessoas Surdas
                        </option>
                        <option value="marketing">
                          Marketing Relacionado à Causa
                        </option>
                        <option value="voluntariado">
                          Voluntariado Corporativo
                        </option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="mensagem"
                        className="text-sm font-medium text-earth"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-600"
                    >
                      Enviar Solicitação
                    </Button>
                  </form>
                  <div className="my-8 text-center">
                    <p className="text-lg text-balance">
                      Ficou com alguma dúvida? <br /> Entre em contato conosco
                      ligando para {import.meta.env.VITE_CONTACT_PHONE} <br />
                      ou
                      <br />
                    </p>
                    <ZapButton
                      text="Olá! Gostaria de mais informações em como me tornar parceiro do Instituto Mãos de Ouro, poderia me ajudar?"
                      phone={import.meta.env.VITE_CONTACT_ZAP}
                      className="hover:bg-green-700 rounded-xl text-white p-2 bg-green-600 text-sm mt-2 inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section id="parceiros-atuais" className="py-20 bg-primary/10">
        <div className="container">
          <SectionTitle
            title="Nossos Parceiros"
            subtitle="Conheça algumas das empresas que já fazem parte da nossa rede de parceiros e nos ajudam a transformar vidas."
            centered
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 font-medium">
                    Empresa Parceira {idx + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark/80 mb-4">
              Sua empresa também pode fazer parte dessa rede de transformação.
            </p>
            <Button
              className="bg-primary hover:bg-primary-600"
              onClick={() => {
                document
                  .getElementById("como-ajudar")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Quero ser Parceiro
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos de Empresas */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            title="O que nossos parceiros dizem"
            subtitle="Veja os depoimentos de algumas empresas que já são nossas parceiras e fazem parte dessa história."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Parceria que vai além da responsabilidade social corporativa, é um compromisso com a construção de uma sociedade mais inclusiva e acessível.",
                name: "Maria Silva",
                role: "Diretora de RSC, Empresa X",
              },
              {
                quote:
                  "Nossos colaboradores se sentem orgulhosos de trabalhar em uma empresa que apoia o Instituto Mãos de Ouro. O impacto na cultura organizacional é notável.",
                name: "João Santos",
                role: "CEO, Empresa Y",
              },
              {
                quote:
                  "A transparência e o profissionalismo do Instituto nos impressionou desde o início. Conseguimos acompanhar de perto o impacto de nossa contribuição.",
                name: "Ana Oliveira",
                role: "Gerente de Marketing, Empresa Z",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 border border-primary/10 relative"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14h3v-2.5m-3 0V8.5M7 8.5h3m3 3V14h3v-2.5m-3 0V8.5m0 0h3"
                    />
                  </svg>
                </div>
                <p className="text-dark/80 mb-6 mt-2 italic">{item.quote}</p>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold font-opensans text-earth">
                      {item.name}
                    </h4>
                    <p className="text-dark/80 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;

import {
  ArrowLeft,
  CaseUpper,
  Computer,
  GraduationCap,
  Heart,
  Home,
  LucideTrendingUp,
  MessageSquare,
  PersonStanding,
  Presentation,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { WhatsApp } from "@/lib/whatsapp";
import { useEffect, useState } from "react";
import { ZapButton } from "@/components/ZapButton";
import { toast } from "sonner";

const Doe = () => {
  const copyPastePix = (e) => {
    e.preventDefault()
    
    navigator.clipboard
      .writeText(import.meta.env.VITE_PIX_CODE)
      .then(() => {
        toast.success(
          "Código PIX copiado com sucesso"
        );
      })
      .catch((error) => {
        toast.error(
          "Houve um erro ao copiar o Código PIX"
        );
      });
  };

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Modified Header for Doe Page */}
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-dark text-white py-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="hidden md:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436643132-6e58c3ae4cd4?ixlib=rb-1.2.1&auto=format&fit=clamp&crop=top&w=1920&h=550&q=80')] bg-no-repeat bg-bottom bg-cover opacity-40"></div>

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
                Doe e
                <span className="mx-2 text-primary relative">
                  Transforme
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
                Vidas
              </h1>
              <div className="w-20 h-1 mx-auto mb-8"></div>
              <p className="text-xl text-balance text-white/90 mb-10">
                Sua contribuição é o primeiro passo para construirmos juntos um
                mundo onde a comunicação não tem barreiras. Cada doação nos
                aproxima de uma sociedade mais inclusiva e acessível para todos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                Por Que Doar?
              </h2>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto text-balance">
                Quando você contribui para nossa causa, está investindo
                diretamente na transformação da vida de pessoas surdas e na
                construção de pontes entre diferentes mundos. Sua doação tem o
                poder de:
              </p>
              <div className="h-1 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
              <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Presentation className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                  Promover Educação
                </h3>
                <p className="text-dark/80">
                  Financiar cursos de Libras e materiais educacionais acessíveis
                  para pessoas surdas e ouvintes.
                </p>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Computer className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                  Desenvolver Tecnologia
                </h3>
                <p className="text-dark/80">
                  Apoiar o desenvolvimento de ferramentas e aplicativos que
                  facilitam a comunicação e a inclusão.
                </p>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <LucideTrendingUp className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-earth mb-2">
                  Ampliar o Alcance
                </h3>
                <p className="text-dark/80">
                  Expandir nossos programas para novas comunidades e regiões que
                  precisam de apoio.
                </p>
              </div>
            </div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                Como Sua Doação É Utilizada
              </h2>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto text-balance">
                Trabalhamos com total transparência e compromisso. Cada
                contribuição é direcionada para projetos específicos que geram
                impacto real e mensurável na comunidade surda.
              </p>
              <div className="h-1 w-24 bg-primary rounded-full mt-6 mx-auto"></div>
            </div>
            <div className="my-10 p-8 bg-dark text-white rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Compromisso com a Transparência
              </h3>
              <p className="mb-4">
                Acreditamos que a confiança é fundamental. Por isso,
                disponibilizamos relatórios periódicos detalhando como cada
                doação é utilizada e o impacto gerado por ela.
              </p>
              <p>
                Nossos doadores são parceiros nessa jornada e têm acesso a todas
                as informações sobre os projetos e iniciativas que apoiam.
              </p>
            </div>
          </div>
        </section>

        <section id="inscricao" className="py-16 bg-primary/5">
          <div className="container p-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-earth mb-4">
                Faça Sua Doação Agora
              </h2>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto text-balance">
                Escolha a modalidade que melhor se adapta às suas possibilidades
                e faça parte dessa transformação.
              </p>
              <div className="h-1 w-24 bg-primary rounded-full my-6 mx-auto"></div>
            </div>
            <div className="rounded-xl p-4 bg-primary/10 mt-20 max-w-4xl mx-auto">
              <h3 className="mb-5 font-opensans p-2 font-semibold">
                Doações de Pessoa Física
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Depósito Bancário
                  </h3>

                  <p className="mb-6">
                    Você pode contribuir com qualquer valor através de depósito
                    em conta.
                  </p>

                  <ul className="space-y-1 text-sm text-brown">
                    <li className="font-medium mb-4">
                      Instituto Mãos de Ouro
                      <br />
                      403 - Cora SCD
                      <br />
                      CNPJ 45.436.301/0001-09
                    </li>
                    <li>
                      <span className="font-medium">Banco:</span> Banco Bradesco
                    </li>
                    <li>
                      <span className="font-medium">Agência:</span> 0001
                    </li>
                    <li>
                      <span className="font-medium">Conta:</span> 2314465-4
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col bg-white rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-primary p-6">PIX</h3>
                  <img className="mx-auto" src="qrcode-pix.png" />
                  <Button className="w-11/12 lg:w-80 mx-auto" onClick={copyPastePix}>
                    Pix Copia/Cola
                  </Button>
                  <p className="p-4 text-sm">
                    Ao realizar o processo de transferência por PIX, sempre
                    verifique se o mesmo está em nome de{" "}
                    <span className="font-semibold text-primary">
                      Instituto Mãos de Ouro - CNPJ 45.436.301/0001-09 CORA SCFI
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-8 text-center">
                <p className="lg:text-lg text-balance">
                  Para doações corporativas ou outras formas de contribuição,
                  entre em contato conosco ligando para{" "}
                  {import.meta.env.VITE_CONTACT_PHONE} <br />
                  ou
                  <br />
                </p>
                <ZapButton
                  text="Olá! Gostaria de mais informações em como contribuir com o Instituto Mãos de Ouro, poderia me ajudar?"
                  phone={import.meta.env.VITE_CONTACT_ZAP}
                  className="hover:bg-green-700 rounded-xl text-white p-2 bg-green-600 text-sm mt-2 inline-block"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Doe;

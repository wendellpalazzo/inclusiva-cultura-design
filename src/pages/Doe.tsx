
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Doe = () => {
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
            <Link to="/#help" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Voltar para Como Ajudar
            </Link>
            
            <div className="text-center max-w-4xl mx-auto">
              <Heart size={60} className="mx-auto mb-6 text-primary md:hidden" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Doe e Transforme Vidas</h1>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-white/90 mb-10">
                Sua contribuição é o primeiro passo para construirmos juntos um mundo onde a comunicação não tem barreiras. 
                Cada doação nos aproxima de uma sociedade mais inclusiva e acessível para todos.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-3xl font-bold text-dark mb-6">Por Que Doar?</h2>
                <p className="mb-6">
                  Quando você contribui para nossa causa, está investindo diretamente na transformação da vida de pessoas surdas 
                  e na construção de pontes entre diferentes mundos. Sua doação tem o poder de:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Promover Educação</h3>
                    <p>Financiar cursos de Libras e materiais educacionais acessíveis para pessoas surdas e ouvintes.</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Desenvolver Tecnologia</h3>
                    <p>Apoiar o desenvolvimento de ferramentas e aplicativos que facilitam a comunicação e a inclusão.</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Ampliar o Alcance</h3>
                    <p>Expandir nossos programas para novas comunidades e regiões que precisam de apoio.</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-primary mb-3">Criar Oportunidades</h3>
                    <p>Gerar empregos e oportunidades profissionais para pessoas surdas em diversos setores.</p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-dark mb-6">Como Sua Doação É Utilizada</h2>
                <p className="mb-6">
                  Trabalhamos com total transparência e compromisso. Cada contribuição é direcionada para projetos específicos 
                  que geram impacto real e mensurável na comunidade surda.
                </p>
                
                <div className="my-10 p-8 bg-dark text-white rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Compromisso com a Transparência</h3>
                  <p className="mb-4">
                    Acreditamos que a confiança é fundamental. Por isso, disponibilizamos relatórios periódicos detalhando 
                    como cada doação é utilizada e o impacto gerado por ela.
                  </p>
                  <p>
                    Nossos doadores são parceiros nessa jornada e têm acesso a todas as informações sobre os projetos e iniciativas 
                    que apoiam.
                  </p>
                </div>
              </div>
              
              {/* Donation Form/Call to Action */}
              <div className="mt-12 bg-primary/10 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-dark mb-6 text-center">Faça Sua Doação Agora</h2>
                <p className="text-center mb-8">
                  Escolha a modalidade que melhor se adapta às suas possibilidades e faça parte dessa transformação.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4">Doação Única</h3>
                    <p className="mb-6">Uma contribuição pontual que faz toda a diferença para nossos projetos atuais.</p>
                    <a 
                      href="#" 
                      className="btn-primary flex items-center justify-center w-full"
                    >
                      Doe Agora
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4">Doação Recorrente</h3>
                    <p className="mb-6">Um apoio contínuo que nos permite planejar e expandir nossas ações a longo prazo.</p>
                    <a 
                      href="#" 
                      className="btn-secondary flex items-center justify-center w-full"
                    >
                      Seja um Apoiador Mensal
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm">
                    Sua doação é protegida por sistemas de pagamento seguros e criptografados.
                    Para doações corporativas ou outras formas de contribuição, entre em <a href="#" className="text-primary hover:underline">contato conosco</a>.
                  </p>
                </div>
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

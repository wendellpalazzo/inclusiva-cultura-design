
import { Accessibility as AccessibilityIcon } from "lucide-react";

const Accessibility = () => {
  const accessibilityFeatures = [
    {
      title: "Navegação Simplificada",
      description: "Menu de navegação intuitivo e fácil de usar, com estrutura clara e consistente em todas as páginas."
    },
    {
      title: "Contraste Adequado",
      description: "Garantimos que o texto tenha contraste suficiente com o fundo para facilitar a leitura por pessoas com baixa visão."
    },
    {
      title: "Textos Alternativos",
      description: "Todas as imagens possuem textos alternativos descritivos para leitores de tela e tecnologias assistivas."
    },
    {
      title: "Textos Claros",
      description: "Utilizamos linguagem simples e direta, com estrutura de parágrafos que facilita a compreensão."
    },
    {
      title: "Vídeos em Libras",
      description: "Conteúdos importantes são disponibilizados também em vídeos com tradução para Língua Brasileira de Sinais."
    },
    {
      title: "Design Responsivo",
      description: "O site se adapta a diferentes dispositivos e tamanhos de tela, garantindo boa experiência em celulares e tablets."
    }
  ];

  return (
    <section id="accessibility" className="py-20 bg-earth/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Acessibilidade</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Comprometidos em tornar nosso conteúdo acessível a todos, implementamos recursos que facilitam 
            a navegação e o acesso à informação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary rounded-full p-3">
                  <AccessibilityIcon size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-earth">Recursos de Acessibilidade</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {accessibilityFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-earth mb-1">{feature.title}</h4>
                      <p className="text-dark/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-earth mb-3">VLibras</h3>
              <p className="text-dark/80 mb-4">
                Nosso site é compatível com a ferramenta VLibras, que traduz automaticamente 
                textos do português para Libras, tornando o conteúdo acessível às pessoas surdas.
              </p>
              <a 
                href="https://www.gov.br/governodigital/pt-br/vlibras" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Saiba mais sobre o VLibras
              </a>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-earth mb-3">Dicas de Navegação</h3>
              <ul className="space-y-2 text-dark/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Use a tecla Tab para navegar entre os elementos interativos da página.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pressione Enter para ativar links e botões quando estiverem em foco.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Utilize as teclas de seta para navegar dentro de menus e listas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pressione Esc para fechar diálogos e menus abertos.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-earth/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-earth mb-3">Ajuda e Suporte</h3>
              <p className="text-dark/80 mb-4">
                Se você encontrar alguma dificuldade para acessar nosso conteúdo ou tiver sugestões 
                para melhorar a acessibilidade, por favor, entre em contato conosco.
              </p>
              <a 
                href="#contact" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;


import { MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth mb-4">Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações sobre nossos projetos, parcerias ou como podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-earth/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-earth mb-6">Envie-nos uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark/80 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-dark/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark/80 mb-2">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark/80 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-primary/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-earth mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-earth mb-1">Telefone</h4>
                    <p className="text-dark/80">(11) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-earth mb-1">Email</h4>
                    <p className="text-dark/80">contato@maosdeouros.org.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-earth mb-1">Endereço</h4>
                    <p className="text-dark/80">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-80 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951863126!2d-46.655470384406085!3d-23.56151478468431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1645564755096!5m2!1spt-BR!2sbr" 
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

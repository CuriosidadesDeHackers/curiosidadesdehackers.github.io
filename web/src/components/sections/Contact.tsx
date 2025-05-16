import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Solicita <span className="text-teal-primary">Información</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Estamos aquí para ayudarte con tus necesidades de ciberseguridad y desarrollo web
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envíanos un mensaje</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-primary text-white rounded-md font-medium flex items-center justify-center transition-all hover:bg-opacity-90 hover-grow"
              >
                Enviar Mensaje
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-50 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dirección</h4>
                    <p className="text-gray-600 mt-1">Calle Factores 12, 41015 Sevilla, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">info@cybersecure.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Teléfono</h4>
                    <p className="text-gray-600 mt-1">+34 618 72 13 58</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-primary rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una web personalizada?</h3>
              <p className="mb-6 text-white/80">
                Creación de tu página web desde cero utilizando las últimas tecnologías y frameworks de desarrollo.
              </p>
              <a 
                href="#contacto" 
                className="inline-flex items-center py-3 px-6 bg-white text-teal-primary rounded-md font-medium transition-all hover:bg-gray-100 hover-grow"
              >
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
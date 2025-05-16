import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  Cloud, 
  Code 
} from 'lucide-react';

const SecurityServices = () => {
  const securityServices = [
    {
      id: 1,
      icon: <Search className="w-12 h-12 text-white" />,
      title: "Auditoría de Aplicaciones Web",
      description: "Análisis de vulnerabilidades OWASP Top 10, inyección SQL, XSS, CSRF y más.",
      color: "bg-blue-600",
      delay: 0
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Pentesting de Infraestructura",
      description: "Tests de penetración en redes, servidores y sistemas operativos.",
      color: "bg-teal-primary",
      delay: 0.2
    },
    {
      id: 3,
      icon: <Cloud className="w-12 h-12 text-white" />,
      title: "Auditoría Cloud",
      description: "Evaluación de seguridad en entornos AWS, Azure y Google Cloud.",
      color: "bg-indigo-600",
      delay: 0.4
    },
    {
      id: 4,
      icon: <Code className="w-12 h-12 text-white" />,
      title: "Desarrollo Web Seguro",
      description: "Implementación de aplicaciones web con los más altos estándares de seguridad.",
      color: "bg-purple-600",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestros Servicios de <span className="text-teal-primary">Seguridad</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Soluciones especializadas para proteger tu negocio digital
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityServices.map((service) => (
            <motion.div
              key={service.id}
              className="flex flex-col md:flex-row gap-6 items-start hover-grow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 p-8 bg-gray-50 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">¿Necesitas una auditoría de seguridad?</h3>
              <p className="text-gray-600">Evaluamos tu infraestructura y te proporcionamos un informe detallado.</p>
            </div>
            <a 
              href="#contacto" 
              className="px-6 py-3 bg-teal-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all whitespace-nowrap hover-grow"
            >
              Solicitar Auditoría
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityServices;
import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  Server, 
  Code, 
  BookOpen, 
  Briefcase, 
  Lock, 
  Wrench 
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Auditoría Web',
      description: 'Análisis exhaustivo de vulnerabilidades en aplicaciones web.',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      id: 2,
      title: 'Pentesting',
      description: 'Tests de penetración para identificar y corregir fallos de seguridad.',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-teal-50',
      iconColor: 'text-teal-primary'
    },
    {
      id: 3,
      title: 'Auditoría de Infraestructura',
      description: 'Evaluación completa de la seguridad de tu infraestructura IT.',
      icon: <Server className="w-6 h-6" />,
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-500'
    },
    {
      id: 4,
      title: 'Desarrollo Seguro',
      description: 'Implementación de aplicaciones web con estándares de seguridad OWASP.',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      id: 5,
      title: 'Academias Online',
      description: 'Plataformas educativas personalizadas para tu negocio.',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      id: 6,
      title: 'Portfolios',
      description: 'Muestra tu trabajo de manera profesional y atractiva.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-pink-50',
      iconColor: 'text-pink-500'
    },
    {
      id: 7,
      title: 'Seguridad',
      description: 'Protección contra cibercriminales y copias de seguridad.',
      icon: <Lock className="w-6 h-6" />,
      color: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      id: 8,
      title: 'Mantenimiento',
      description: 'Soporte técnico continuo para tu tranquilidad.',
      icon: <Wrench className="w-6 h-6" />,
      color: 'bg-green-50',
      iconColor: 'text-green-500'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestros <span className="text-teal-primary">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Ofrecemos soluciones integrales para proteger y potenciar tu presencia digital
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              iconColor={service.iconColor}
            />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center py-3 px-6 rounded bg-teal-primary text-white font-medium transition-all hover:bg-opacity-90 hover-grow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Ver todos los servicios
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
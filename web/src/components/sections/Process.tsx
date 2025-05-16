import { motion } from 'framer-motion';
import { Search, PlaneLanding, Play, LineChart } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades y objetivos de seguridad',
      icon: <Search className="w-8 h-8" />,
      delay: 0
    },
    {
      id: 2,
      title: 'Planificación',
      description: 'Desarrollamos una estrategia personalizada',
      icon: <PlaneLanding className="w-8 h-8" />,
      delay: 0.2
    },
    {
      id: 3,
      title: 'Implementación',
      description: 'Ejecutamos las soluciones de seguridad',
      icon: <Play className="w-8 h-8" />,
      delay: 0.4
    },
    {
      id: 4,
      title: 'Monitoreo',
      description: 'Supervisión y mejora continua',
      icon: <LineChart className="w-8 h-8" />,
      delay: 0.6
    }
  ];

  return (
    <section 
      id="proceso" 
      className="py-20 bg-gray-50"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestro <span className="text-teal-primary">Proceso</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Una metodología bien definida para garantizar resultados óptimos
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col items-center text-center relative z-10 hover-grow">
                <div className="bg-teal-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="absolute top-8 right-0 text-8xl font-bold text-gray-100 opacity-60 z-0">
                  {step.id}
                </div>
              </div>
              
              {step.id < processSteps.length && (
                <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 w-12 h-4 z-20">
                  <svg 
                    className="w-full h-full text-teal-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 8"
                  >
                    <path d="M23.354 4.354a.5.5 0 0 0 0-.708L20.172.464a.5.5 0 0 0-.708.708L22.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182zM0 4.5h23v-1H0v1z"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Users, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: <FileCheck className="w-10 h-10 text-teal-primary" />,
      value: "500",
      label: "Auditorías Realizadas",
      delay: 0
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-10 h-10 text-teal-primary" />,
      value: "1000",
      label: "Vulnerabilidades Detectadas",
      delay: 0.1
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-teal-primary" />,
      value: "200",
      label: "Clientes Protegidos",
      delay: 0.2
    },
    {
      id: 4,
      icon: <Award className="w-10 h-10 text-teal-primary" />,
      value: "50",
      label: "Certificaciones",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-teal-primary rounded-2xl overflow-hidden shadow-xl">
          <div 
            className="p-8 md:p-12 relative"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23FFFFFF" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
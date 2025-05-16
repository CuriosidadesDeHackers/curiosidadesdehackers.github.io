import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  iconColor: string;
}

const ServiceCard = ({ title, description, icon, color, iconColor }: ServiceCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 transition-all hover-grow"
      variants={item}
    >
      <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
        <div className={`${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
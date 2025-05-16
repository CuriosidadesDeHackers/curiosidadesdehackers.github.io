import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  delay: number;
}

const ProjectCard = ({ title, category, image, delay }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg hover-grow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-white/80 mb-2">{category}</p>
        
        <div className="absolute top-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-teal-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default ProjectCard;
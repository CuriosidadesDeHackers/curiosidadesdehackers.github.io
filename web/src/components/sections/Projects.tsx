import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'The Hackers Labs',
      category: 'Plataforma de entrenamiento en ciberseguridad',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0
    },
    {
      id: 2,
      title: 'Bug Bounty Labs',
      category: 'Laboratorio de Bug Bounty',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.1
    },
    {
      id: 3,
      title: 'BugCrowd',
      category: 'Plataforma de bug bounty',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.2
    },
    {
      id: 4,
      title: 'CuriosidadesDeHackers',
      category: 'Blog de ciberseguridad',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.3
    },
    {
      id: 5,
      title: 'CuriosidadesDeHackers',
      category: 'Portfolio',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.4
    },
    {
      id: 6,
      title: 'CuriosidadesDeHackers',
      category: 'Portfolio Personal',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.5
    },
    {
      id: 7,
      title: 'Curiosidades De Hackers',
      category: 'Portfolio Personal',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.6
    },
    {
      id: 8,
      title: 'CuriosidadesDeHackers',
      category: 'Académia de Ciberseguridad',
      image: 'https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      delay: 0.7
    }
  ];

  return (
    <section 
      id="proyectos" 
      className="py-20 bg-gray-50"
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
              Proyectos <span className="text-teal-primary">Destacados</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Nuestros casos de éxito y trabajos realizados
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
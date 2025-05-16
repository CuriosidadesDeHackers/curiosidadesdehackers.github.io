import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-primary bg-opacity-30 rounded-full mb-4">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Ciberseguridad y Desarrollo Web</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Protege tu negocio digital con soluciones avanzadas
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-lg">
              Ofrecemos servicios de ciberseguridad de vanguardia y desarrollo web profesional para mantener tu negocio seguro y en crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center py-3 px-6 rounded bg-teal-primary text-white font-medium transition-all hover:bg-opacity-90 hover-grow"
              >
                Solicitar Servicios
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center py-3 px-6 rounded border-2 border-white text-white font-medium transition-all hover:bg-white hover:text-gray-900"
              >
                Explorar Servicios
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-teal-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gold-primary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="text-white w-32 h-32" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
        >
          <div>
            <div className="text-4xl font-bold mb-2 text-gold-primary">500+</div>
            <div className="opacity-80">Auditorías Realizadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-gold-primary">1000+</div>
            <div className="opacity-80">Vulnerabilidades Detectadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-gold-primary">200+</div>
            <div className="opacity-80">Clientes Protegidos</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-gold-primary">50+</div>
            <div className="opacity-80">Certificaciones</div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
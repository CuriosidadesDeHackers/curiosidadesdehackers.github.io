import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-teal-primary mr-2" />
              <span className="text-xl font-bold">
                <span className="text-teal-primary">Cyber</span>
                <span className="text-gold-primary">Secure</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Protegemos tu negocio digital con soluciones de seguridad avanzadas y desarrollo web profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Auditoría Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Pentesting</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Desarrollo Seguro</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Academias Online</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Portfolios</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Equipo</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Casos de Éxito</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors">Política de Privacidad</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-primary mr-2 mt-0.5" />
                <span className="text-gray-400">Calle Factores 12, 41015 Sevilla, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-teal-primary mr-2" />
                <span className="text-gray-400">+34 618 72 13 58</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-teal-primary mr-2" />
                <span className="text-gray-400">info@cybersecure.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CyberSecure. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
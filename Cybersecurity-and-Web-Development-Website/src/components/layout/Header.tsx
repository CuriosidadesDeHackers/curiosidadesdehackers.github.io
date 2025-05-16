import { useState, useEffect } from 'react';
import { Menu, X, Shield, Lock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center text-teal-primary">
              <Shield className="w-8 h-8 mr-2" />
              <Lock className="w-6 h-6" />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">
              <span className="text-teal-primary">Cyber</span>
              <span className="text-gold-primary">Secure</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-800 hover:text-teal-primary font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contacto" 
                  className="px-4 py-2 bg-teal-primary text-white rounded hover:bg-opacity-90 transition-all"
                >
                  Solicitar Servicios
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="flex items-center text-teal-primary">
                  <Shield className="w-8 h-8 mr-2" />
                  <Lock className="w-6 h-6" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  <span className="text-teal-primary">Cyber</span>
                  <span className="text-gold-primary">Secure</span>
                </span>
              </div>
              <button 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            <nav>
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-xl font-medium text-gray-800 hover:text-teal-primary block py-2"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a 
                    href="#contacto" 
                    className="block w-full text-center px-4 py-3 bg-teal-primary text-white rounded hover:bg-opacity-90 transition-all"
                    onClick={toggleMenu}
                  >
                    Solicitar Servicios
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import SecurityServices from './components/sections/SecurityServices';
import Projects from './components/sections/Projects';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Ciberseguridad y Desarrollo Web";
    
    // Add dark teal color to tailwind as a custom class through style tag
    const style = document.createElement('style');
    style.textContent = `
      .bg-teal-primary { background-color: #198994; }
      .text-teal-primary { color: #198994; }
      .border-teal-primary { border-color: #198994; }
      .bg-gold-primary { background-color: #ffd700; }
      .text-gold-primary { color: #ffd700; }
      .border-gold-primary { border-color: #ffd700; }
      .hover-grow { transition: transform 0.3s ease; }
      .hover-grow:hover { transform: scale(1.03); }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Process />
        <SecurityServices />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
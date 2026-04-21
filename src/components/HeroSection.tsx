import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <ThreeScene />

      {/* Glow background */}
      <div className="absolute inset-0 bg-white/5 blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.jpg"
              alt="Muhammad Alfarizi Herdiawan"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border border-white/20 shadow-xl"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-center md:text-left flex-1">

            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Muhammad Alfarizi Herdiawan
              <br />
              <span className="text-gray-400">
                Pelajar &amp; Coder
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"
            >
              Saya mulai belajar coding sejak kelas 1 SMA dan terus
              mengembangkan skill di bidang teknologi. Saya percaya
              bahwa coding adalah kunci untuk menciptakan masa depan
              yang lebih baik.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-white text-white hover:bg-white hover:text-black"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-6 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/alfarizi2809', label: 'GitHub' },
                { icon: Instagram, href: 'https://www.instagram.com/malfarizyyx', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-white" />
      </motion.button>
    </section>
  );
}
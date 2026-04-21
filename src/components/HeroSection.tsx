import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Terminal, Zap } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">
      <ThreeScene />

      {/* Deep Navy Gradient Glow */}
      <div className="absolute inset-0 bg-blue-900/10 blur-[150px] opacity-60" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* FOTO PROFIL DENGAN FRAME MODERN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/profile.jpg" 
              alt="Kaysan Altaf Zully"
              className="relative w-60 h-60 md:w-80 md:h-80 object-cover rounded-2xl border border-blue-400/20 shadow-2xl transition-all duration-500 grayscale-[20%] hover:grayscale-0"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#112240] border border-blue-400/30 p-4 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-blue-100 text-xs font-mono">System: Optimized</span>
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-center md:text-left flex-1">

            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-xs font-mono tracking-tighter text-cyan-400 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Terminal className="w-3 h-3" />
              <span>STABLE_BUILD_V2.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-[0.9]"
            >
              Kaysan Altaf <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Zully.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-blue-100/60 mb-10 max-w-2xl leading-relaxed font-light"
            >
              Membangun masa depan digital melalui <span className="text-white font-medium">arsitektur kode yang presisi</span>. Fokus pada performa tinggi, desain minimalis, dan solusi teknologi yang berdampak luas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center md:justify-start gap-5 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-none h-14 px-10 bg-blue-600 text-white hover:bg-cyan-500 transition-colors duration-300 font-bold uppercase tracking-widest text-xs"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Launch Projects <Zap className="ml-2 w-4 h-4 fill-current" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-none h-14 px-10 border-blue-400/50 text-blue-100 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-8 justify-center md:justify-start border-t border-blue-400/10 pt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/Acan22-collab#', label: 'GitHub' },
                { icon: Instagram, href: 'https://www.instagram.com/kaysan.02', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-2 text-blue-100/40 hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-xs font-mono tracking-widest uppercase hidden sm:block">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/40 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Acan22-collab', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kaysan.02', label: 'Instagram' },
  ];

  return (
    <footer className="py-12 border-t border-blue-400/10 bg-[#0a192f] text-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Copyright & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <p className="text-blue-100/80 font-medium tracking-tight text-lg">
              Kaysan Altaf <span className="text-cyan-400">Zully</span>
            </p>
            <div className="text-blue-100/40 text-xs font-mono uppercase tracking-widest flex flex-wrap justify-center md:justify-start items-center gap-2">
              <span>© {currentYear} All Rights Reserved</span>
              <span className="hidden md:inline text-blue-400/20">|</span>
              <span className="flex items-center gap-1.5">
                Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> in Indonesia
              </span>
            </div>
          </motion.div>

          {/* Social Links & Navigation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-xl bg-blue-900/30 border border-blue-400/10 text-blue-100/60 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-blue-900/60 transition-all duration-300 shadow-lg"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-[10px] text-blue-100/30 font-mono tracking-tighter">
              v2.4.0 — PRODUCTION_READY
            </p>
          </motion.div>

        </div>

      </div>
    </footer>
  );
}
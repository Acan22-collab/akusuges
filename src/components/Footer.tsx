import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-10 border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} Muhammad Alfarizi Herdiawan  
            <br className="md:hidden" />
            <span className="text-gray-500"> — Built with passion 💻</span>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </motion.div>

        </div>

      </div>
    </footer>
  );
}
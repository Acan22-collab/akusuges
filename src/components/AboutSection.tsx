import { motion } from 'framer-motion';
import { Code2, Coffee, Rocket, Terminal, Brain, Cpu, Globe } from 'lucide-react';

export default function AboutSection() {

  const stats = [
    { icon: Code2, value: '15+', label: 'Projects Completed' },
    { icon: Rocket, value: '3+', label: 'Years Experience' },
    { icon: Coffee, value: '999+', label: 'Cups of Coffee' },
    { icon: Brain, value: 'Active', label: 'Learning Status' },
  ];

  return (
    <section id="about" className="py-28 bg-[#0a192f] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs font-mono mb-2 uppercase">
            Discovery
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Behind The Code
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + FLOAT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            <div className="relative group">

              {/* Cyan Glow effect */}
              <div className="absolute -inset-4 blur-3xl bg-cyan-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative overflow-hidden rounded-2xl border border-blue-400/20">
                <img
                  src="/profile.jpg"
                  alt="Kaysan Altaf Zully"
                  className="w-80 h-96 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating glass card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 p-5 bg-[#112240]/80 border border-blue-400/30 rounded-2xl backdrop-blur-xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-blue-300">Specialization</p>
                    <p className="font-bold text-sm">Fullstack Architect</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Empowering brands with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Kaysan Altaf Zully
                </span>
              </h3>

              <p className="text-blue-100/70 leading-relaxed text-lg">
                Saya adalah seorang developer yang berdedikasi untuk menciptakan sistem digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman pengguna yang tak terlupakan.
              </p>

              <p className="text-blue-100/50 leading-relaxed">
                Ketertarikan saya pada teknologi dimulai dari rasa penasaran bagaimana sebuah baris perintah dapat menyelesaikan masalah kompleks. Kini, saya fokus mengintegrasikan performa, keamanan, dan estetika dalam setiap karya digital yang saya bangun.
              </p>
            </div>

            {/* TECH STACK TAGS */}
            <div className="space-y-4">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Tech Stack Preferrence
              </p>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-xs font-medium border border-blue-400/20 rounded-lg bg-blue-900/20 text-blue-100 hover:border-cyan-400/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-28">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 text-center border border-blue-400/10 rounded-3xl bg-[#112240]/40 hover:bg-blue-900/30 hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>

              <p className="text-3xl font-black mb-1 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="text-xs uppercase tracking-widest text-blue-300/60 font-medium">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
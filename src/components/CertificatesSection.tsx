import { motion } from 'framer-motion';
import { BookOpen, Calendar, Code, Cpu, Database, Layout, ShieldCheck, Zap } from 'lucide-react';

const learning = [
  {
    title: 'Advanced React & Next.js',
    description: 'Menguasai Server Components, SSR, dan optimasi performa untuk aplikasi skala besar.',
    progress: 'Phase: Optimization',
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'TypeScript Architecture',
    description: 'Menerapkan type-safety yang ketat untuk membangun kode yang robust dan maintainable.',
    progress: 'Phase: Mastery',
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'Backend Systems',
    description: 'Mempelajari Node.js dan Go untuk membangun API yang cepat, aman, dan efisien.',
    progress: 'Phase: Deep Learning',
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'Database Management',
    description: 'Eksplorasi SQL dan NoSQL untuk manajemen data yang terstruktur dan skalabel.',
    progress: 'Phase: Implementation',
    icon: <Database className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'DevOps & Git Flow',
    description: 'Otomasi deployment dengan CI/CD dan manajemen kolaborasi via GitHub Actions.',
    progress: 'Phase: Automation',
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'System Design',
    description: 'Mempelajari cara merancang arsitektur aplikasi yang scalable dan reliabel.',
    progress: 'Phase: Theoretical',
    icon: <Code className="w-6 h-6 text-blue-400" />,
  },
];

export default function LearningSection() {
  return (
    <section id="learning" className="relative py-24 md:py-32 overflow-hidden bg-[#0a192f]">

      {/* Navy Glow Background */}
      <div className="absolute inset-0 bg-blue-900/10 blur-[120px] opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-3 block">
            Growth & Roadmap
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Stack</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {learning.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <motion.div
                whileHover={{ y: -8 }}
                className="h-full p-8 bg-[#112240]/40 backdrop-blur-md border border-blue-400/10 rounded-3xl hover:border-cyan-400/30 transition-all duration-500 group shadow-xl"
              >

                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-blue-900/40 border border-blue-400/20 group-hover:bg-blue-600/20 group-hover:border-cyan-400/40 transition-all">
                  {item.icon}
                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-blue-100/60 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-blue-400/5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300/80">
                      {item.progress}
                    </span>
                  </div>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
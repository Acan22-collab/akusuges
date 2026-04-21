import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Globe, Terminal, Cpu, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Arsitektur website portfolio dengan performa tinggi, optimasi SEO, dan animasi halus.',
    tags: ['Next.js', 'Tailwind', 'Framer'],
    icon: <Globe className="w-10 h-10 text-cyan-400" />,
    status: 'Selesai',
    github: 'https://github.com/alfarizi2809',
    demo: '#',
  },
  {
    title: 'Neural Task Manager',
    description: 'Aplikasi manajemen tugas cerdas dengan sinkronisasi state lokal dan sistem prioritas.',
    tags: ['React', 'Zustand', 'Vite'],
    icon: <Zap className="w-10 h-10 text-blue-400" />,
    status: 'Pemeliharaan',
    github: '#',
  },
  {
    title: 'Data Engine v1',
    description: 'Kalkulator komputasi presisi tinggi untuk menangani operasi matematika kompleks di browser.',
    tags: ['TypeScript', 'MathJS'],
    icon: <Cpu className="w-10 h-10 text-cyan-400" />,
    status: 'Selesai',
    github: '#',
  },
  {
    title: 'Cloud Landing Page',
    description: 'Desain UI futuristik untuk layanan cloud computing dengan fokus pada konversi pengguna.',
    tags: ['HTML', 'CSS', 'PostCSS'],
    icon: <Database className="w-10 h-10 text-blue-400" />,
    status: 'Belajar',
    github: '#',
  },
  {
    title: 'Python Automation',
    description: 'Skrip otomatisasi tingkat lanjut untuk efisiensi workflow dan pemrosesan data masif.',
    tags: ['Python', 'Automation'],
    icon: <Terminal className="w-10 h-10 text-cyan-400" />,
    status: 'Berjalan',
    github: '#',
  },
  {
    title: 'Creative Lab',
    description: 'Eksperimen teknologi terbaru termasuk integrasi AI dan WebGL untuk pengalaman interaktif.',
    tags: ['Innovation', 'Web3'],
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
    status: 'Eksplorasi',
    github: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-0" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase mb-3 block">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Saya</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >

              <div className="group relative h-full p-8 bg-[#112240]/40 backdrop-blur-md border border-blue-400/10 rounded-3xl hover:border-cyan-400/40 hover:-translate-y-3 transition-all duration-500 shadow-2xl">
                
                {/* Status Badge */}
                <div className="flex justify-between items-center mb-6">
                   <div className="p-3 bg-blue-900/40 rounded-2xl border border-blue-400/10 group-hover:scale-110 transition-transform">
                      {project.icon}
                   </div>
                   <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-950/50 border border-blue-400/20 text-blue-300 uppercase tracking-widest">
                      {project.status}
                   </span>
                </div>

                <div className="space-y-4">

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-blue-100/60 leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-lg bg-blue-900/40 border border-blue-400/20 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 border-t border-blue-400/5">

                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 rounded-xl border-blue-400/20 bg-transparent text-blue-100 hover:bg-blue-400/10 hover:border-cyan-400/50" 
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button 
                        size="sm" 
                        className="flex-1 rounded-xl bg-blue-600 text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all" 
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
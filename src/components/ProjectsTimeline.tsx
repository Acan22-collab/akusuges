import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Website portfolio pribadi untuk menampilkan project dan skill saya.',
    tags: ['React', 'Tailwind'],
    image: '💻',
    status: 'Selesai',
    github: '#',
    demo: '#',
  },
  {
    title: 'To-Do List App',
    description: 'Aplikasi sederhana untuk mencatat tugas harian.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: '📝',
    status: 'Selesai',
    github: '#',
  },
  {
    title: 'Kalkulator',
    description: 'Kalkulator sederhana menggunakan JavaScript.',
    tags: ['JavaScript'],
    image: '🧮',
    status: 'Selesai',
    github: '#',
  },
  {
    title: 'Landing Page',
    description: 'Latihan membuat UI modern dan responsive.',
    tags: ['HTML', 'CSS'],
    image: '🌐',
    status: 'Belajar',
    github: '#',
  },
  {
    title: 'Python Tools',
    description: 'Script Python untuk membantu tugas sederhana.',
    tags: ['Python'],
    image: '🐍',
    status: 'Berjalan',
    github: '#',
  },
  {
    title: 'Eksperimen',
    description: 'Project kecil saat mencoba hal baru.',
    tags: ['Learning'],
    image: '⚡',
    status: 'Eksplorasi',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black text-white">

      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 block mb-2">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Project Saya
          </h2>

          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="group h-full p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/40 hover:-translate-y-2 transition-all duration-300">

                {/* Icon */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
                  <span className="text-5xl">{project.image}</span>
                </div>

                <div className="space-y-3">

                  {/* Title + Status */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>

                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">

                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 text-white hover:bg-white hover:text-black"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="rounded-full bg-white text-black hover:bg-gray-200"
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
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
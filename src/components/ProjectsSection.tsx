import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Website portfolio pribadi yang saya buat untuk menampilkan project dan skill saya.',
    tags: ['React', 'Tailwind'],
    image: '💻',
    github: '#',
    demo: '#',
  },
  {
    title: 'To-Do List App',
    description: 'Aplikasi sederhana untuk mencatat tugas harian dengan fitur tambah dan checklist.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: '📝',
    github: '#',
  },
  {
    title: 'Kalkulator Sederhana',
    description: 'Project latihan JavaScript untuk membuat kalkulator dengan operasi dasar.',
    tags: ['JavaScript'],
    image: '🧮',
    github: '#',
  },
  {
    title: 'Landing Page',
    description: 'Halaman website modern untuk latihan desain UI dan responsive layout.',
    tags: ['HTML', 'CSS'],
    image: '🌐',
    github: '#',
  },
  {
    title: 'Python Mini Tools',
    description: 'Kumpulan script Python sederhana untuk membantu tugas sehari-hari.',
    tags: ['Python'],
    image: '🐍',
    github: '#',
  },
  {
    title: 'Eksperimen Coding',
    description: 'Project kecil yang dibuat saat mencoba teknologi baru.',
    tags: ['Learning'],
    image: '⚡',
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
          <span className="text-gray-400 block mb-2">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Project Saya
          </h2>

          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
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

              <div className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:-translate-y-2 transition-all duration-300">

                {/* Icon */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10">
                  <span className="text-5xl">{project.image}</span>
                </div>

                <div className="space-y-3">

                  <h3 className="text-lg font-bold">
                    {project.title}
                  </h3>

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
                      <Button variant="outline" size="sm" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button size="sm" className="rounded-full bg-white text-black hover:bg-gray-200" asChild>
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
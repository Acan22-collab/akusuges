import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website personal untuk showcase skill, project, dan perjalanan belajar coding.',
    tags: ['React', 'Tailwind'],
    image: '💻',
    status: 'Done',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Manager',
    description: 'Aplikasi sederhana untuk mengatur aktivitas harian dengan fitur checklist.',
    tags: ['JavaScript'],
    image: '📋',
    status: 'Done',
    github: '#',
  },
  {
    title: 'Calculator App',
    description: 'Kalkulator basic untuk latihan logic JavaScript.',
    tags: ['JS'],
    image: '🧮',
    status: 'Done',
    github: '#',
  },
  {
    title: 'Landing UI',
    description: 'Latihan membuat tampilan website modern dan responsive.',
    tags: ['HTML', 'CSS'],
    image: '🌐',
    status: 'Learning',
    github: '#',
  },
  {
    title: 'Python Mini Tools',
    description: 'Script kecil untuk automation dan latihan logic programming.',
    tags: ['Python'],
    image: '🐍',
    status: 'Ongoing',
    github: '#',
  },
  {
    title: 'Code Experiments',
    description: 'Eksperimen berbagai teknologi baru yang sedang dipelajari.',
    tags: ['Explore'],
    image: '⚡',
    status: 'Explore',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-black text-white">

      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 mb-2 tracking-widest text-sm">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Selected Projects
          </h2>

          <div className="w-16 h-[2px] bg-white/30 mx-auto mt-4" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="group relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">

                {/* glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl bg-white/5" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div className="flex items-center justify-center h-24 mb-4 text-5xl border border-white/10 rounded-xl bg-black">
                    {project.image}
                  </div>

                  {/* TITLE */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">
                      {project.title}
                    </h3>

                    <span className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* DESC */}
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-white/10 rounded-md text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="flex gap-2">

                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 text-white hover:bg-white hover:text-black"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="w-4 h-4 mr-1" />
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
                          <ExternalLink className="w-4 h-4 mr-1" />
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
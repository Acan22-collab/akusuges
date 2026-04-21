import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Next.js Enterprise Ecosystem",
    description: "Arsitektur portfolio modern dengan optimasi SSR, Framer Motion, dan integrasi Supabase untuk manajemen data real-time.",
    status: "Completed",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Neural Task Manager",
    description: "Sistem manajemen tugas dengan algoritma prioritas dan sinkronisasi cloud untuk produktivitas tim yang skalabel.",
    status: "Maintenance",
    tech: ["React", "Firebase", "Zustand"],
  },
  {
    title: "Quantum Calculation Engine",
    description: "Engine kalkulasi berbasis JavaScript yang dioptimalkan untuk presisi tinggi dan performa komputasi di sisi klien.",
    status: "Completed",
    tech: ["JavaScript", "MathJS", "Vite"],
  },
  {
    title: "Cyber-UI Design System",
    description: "Library komponen UI yang fokus pada aksesibilitas dan estetika futuristik untuk kebutuhan landing page korporasi.",
    status: "In Progress",
    tech: ["Radix UI", "Stitches", "Figma"],
  },
  {
    title: "Automated Data Scraper",
    description: "Kumpulan tool otomatisasi Python untuk ekstraksi data web dan analisis sentimen pasar secara terprogram.",
    status: "Active",
    tech: ["Python", "Selenium", "Pandas"],
  },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] -z-0" />

      <div className="container mx-auto px-12 relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-3">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-6 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="h-full p-8 rounded-3xl bg-[#112240]/40 border border-blue-400/10 hover:border-cyan-400/30 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-blue-900/40 rounded-2xl">
                          <Layers className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex gap-3 text-blue-100/40">
                          <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                          <ExternalLink className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-blue-100/60 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono text-cyan-400/70 border border-cyan-400/20 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          project.status === 'Completed' ? 'bg-cyan-400' : 'bg-blue-500 animate-pulse'
                        }`} />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-100/40">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="bg-[#112240] border-blue-400/20 text-white -left-12 hover:bg-cyan-500 hover:text-black" />
              <CarouselNext className="bg-[#112240] border-blue-400/20 text-white -right-12 hover:bg-cyan-500 hover:text-black" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
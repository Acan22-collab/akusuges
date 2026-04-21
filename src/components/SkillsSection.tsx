import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  Database, 
  Smartphone, 
  Palette 
} from 'lucide-react';

const skills = [
  { name: 'React / Next.js', icon: Code2, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: Terminal, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-300' },
  { name: 'Node.js', icon: Cpu, color: 'text-green-400' },
  { name: 'PostgreSQL / Supabase', icon: Database, color: 'text-blue-500' },
  { name: 'Three.js / Fiber', icon: Globe, color: 'text-white' },
  { name: 'React Native', icon: Smartphone, color: 'text-indigo-400' },
  { name: 'Framer Motion', icon: Layers, color: 'text-pink-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function SkillSection() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-[#0a192f]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-3">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Tech <span className="text-cyan-400 italic">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full" />
        </div>

        {/* Skill Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-[#112240]/40 border border-blue-400/10 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 shadow-xl"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className={`p-4 rounded-2xl bg-blue-950/50 ${skill.color} group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition-all duration-500 shadow-inner`}>
                  <skill.icon size={32} />
                </div>
                <h3 className="text-sm font-bold text-blue-100 tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/10 blur-[120px] -z-10" />
    </section>
  );
}
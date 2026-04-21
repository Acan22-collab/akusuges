import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Terminal, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AccordionSection() {
  return (
    <section className="relative py-24 px-4 max-w-4xl mx-auto !text-white overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <span className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-3 block">
          Knowledge Base
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight !text-white">
          Deep Dive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">Insights</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </motion.div>

      <Accordion type="single" collapsible className="w-full space-y-4 relative z-10 border-none">

        {/* Item 1 */}
        <AccordionItem 
          value="item-1" 
          className="border border-blue-400/10 bg-[#112240]/40 backdrop-blur-md rounded-2xl px-6 data-[state=open]:border-cyan-400/40"
        >
          <AccordionTrigger className="!text-white !no-underline hover:!text-cyan-400 group py-6 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-900/50 text-cyan-400 rounded-xl group-data-[state=open]:bg-cyan-500 group-data-[state=open]:text-[#0a192f] transition-all">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-lg md:text-xl font-bold !text-white group-data-[state=open]:!text-cyan-400">
                Workflow & Tech Stack Utama
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="!text-blue-100/70 leading-relaxed text-base pb-8">
            Dalam membangun solusi digital, saya mengandalkan ekosistem <span className="text-cyan-400 font-bold">Modern JavaScript</span> seperti React dan Next.js.
          </AccordionContent>
        </AccordionItem>

        {/* Item 2 */}
        <AccordionItem 
          value="item-2" 
          className="border border-blue-400/10 bg-[#112240]/40 backdrop-blur-md rounded-2xl px-6 data-[state=open]:border-cyan-400/40"
        >
          <AccordionTrigger className="!text-white !no-underline hover:!text-cyan-400 group py-6 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-900/50 text-cyan-400 rounded-xl group-data-[state=open]:bg-cyan-500 group-data-[state=open]:text-[#0a192f] transition-all">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-lg md:text-xl font-bold !text-white group-data-[state=open]:!text-cyan-400">
                Eksplorasi Teknologi Saat Ini
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="!text-blue-100/70 leading-relaxed text-base pb-8">
            Saat ini, saya sedang mendalami implementasi <span className="text-cyan-400 font-bold">Artificial Intelligence</span> dalam pengembangan web.
          </AccordionContent>
        </AccordionItem>

        {/* Item 3 */}
        <AccordionItem 
          value="item-3" 
          className="border border-blue-400/10 bg-[#112240]/40 backdrop-blur-md rounded-2xl px-6 data-[state=open]:border-cyan-400/40"
        >
          <AccordionTrigger className="!text-white !no-underline hover:!text-cyan-400 group py-6 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-900/50 text-cyan-400 rounded-xl group-data-[state=open]:bg-cyan-500 group-data-[state=open]:text-[#0a192f] transition-all">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-lg md:text-xl font-bold !text-white group-data-[state=open]:!text-cyan-400">
                Visi dan Fokus Jangka Panjang
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="!text-blue-100/70 leading-relaxed text-base pb-8">
            Visi saya adalah membangun infrastruktur digital yang inklusif dan berkontribusi pada <span className="text-cyan-400 font-bold">open-source</span> global.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      {/* Decorative Blur Background */}
      <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-cyan-600/10 blur-[120px] rounded-full" />
      <div className="absolute -z-10 -top-20 -left-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full" />
    </section>
  );
}
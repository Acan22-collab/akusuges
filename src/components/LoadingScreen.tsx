import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const text = "Initializing system assets...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a192f]">
      
      {/* Deep Blue Glow Background */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
      />

      <div className="relative text-center px-4">

        {/* Nama Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Kaysan Altaf <span className="text-cyan-400">Zully</span>
          </h1>
        </motion.div>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4 }}
          className="text-blue-100 font-mono text-xs uppercase tracking-[0.5em] mb-8"
        >
          Software Engineer & Creator
        </motion.p>

        {/* Typing Terminal Style */}
        <div className="flex items-center justify-center gap-2 font-mono text-cyan-400/80 text-sm h-6">
          <span className="opacity-50 group-hover:opacity-100">{">"}</span>
          <p>
            {displayedText}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
            />
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-64 h-[2px] bg-blue-900/50 rounded-full overflow-hidden mt-10 mx-auto border border-blue-400/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-2/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>

        {/* Bottom Version Tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full"
        >
          <p className="text-[10px] font-mono tracking-widest uppercase text-blue-100">
            System Boot Sequence // 2026
          </p>
        </motion.div>

      </div>
    </div>
  );
}
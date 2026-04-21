import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const learning = [
  {
    title: 'JavaScript',
    description: 'Memahami dasar hingga konsep lanjutan untuk membuat website interaktif.',
    progress: 'Sedang Dipelajari',
    image: '🟨',
  },
  {
    title: 'Python',
    description: 'Mengembangkan logika programming dan membuat program sederhana.',
    progress: 'Terus Dikembangkan',
    image: '🐍',
  },
  {
    title: 'C++',
    description: 'Belajar dasar algoritma dan pemrograman berbasis performa.',
    progress: 'Dipahami Dasar',
    image: '💻',
  },
  {
    title: 'HTML & CSS',
    description: 'Membangun tampilan website yang responsive dan menarik.',
    progress: 'Aktif Digunakan',
    image: '🌐',
  },
  {
    title: 'Git & GitHub',
    description: 'Belajar version control untuk menyimpan dan mengelola project.',
    progress: 'Sedang Dipelajari',
    image: '🐙',
  },
  {
    title: 'Problem Solving',
    description: 'Melatih logika dan kemampuan menyelesaikan masalah dalam coding.',
    progress: 'Terus Dilatih',
    image: '🧠',
  },
];

export default function LearningSection() {
  return (
    <section id="learning" className="relative py-20 md:py-32 overflow-hidden bg-black">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-white/5 blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 font-medium mb-2 block">
            Learning Journey
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Apa yang Sedang Saya Pelajari
          </h2>

          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {learning.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg transition-all duration-300 text-white"
              >

                <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-white/10">
                  <span className="text-2xl">{item.image}</span>
                </div>

                <div className="space-y-3">

                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-white/70 mt-0.5" />

                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{item.progress}</span>
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
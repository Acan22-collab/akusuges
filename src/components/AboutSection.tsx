import { motion } from 'framer-motion';
import { Code2, Coffee, Rocket, BookOpen } from 'lucide-react';

export default function AboutSection() {

  const stats = [
    { icon: Code2, value: '10+', label: 'Projects' },
    { icon: Rocket, value: '2+', label: 'Years' },
    { icon: Coffee, value: '∞', label: 'Energy' },
    { icon: BookOpen, value: 'Student', label: 'Status' },
  ];

  return (
    <section id="about" className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <p className="text-gray-500 tracking-widest text-sm mb-2">
            ABOUT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Who Am I
          </h2>

          <div className="w-16 h-[2px] bg-white/30 mx-auto mt-4" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - IMAGE + FLOAT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex justify-center"
          >

            <div className="relative">

              {/* glow */}
              <div className="absolute inset-0 blur-2xl bg-white/10 rounded-full" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-72 h-72 object-cover rounded-2xl border border-white/10"
              />

              {/* floating card */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="font-semibold">Web Development</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Halo, saya <br />
              <span className="text-gray-400">
                Muhammad Alfarizi Herdiawan
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Saya adalah seorang pelajar di MAN 1 Banda Aceh yang memiliki
              minat besar di dunia teknologi, khususnya programming dan
              pengembangan website.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Saya mulai belajar coding sejak kelas 1 SMA. Sejak itu,
              saya terus mengembangkan skill dengan membuat berbagai
              project kecil dan mencoba teknologi baru.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Python', 'JavaScript', 'C++', 'HTML', 'CSS'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-white/10 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 text-center border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >

              <stat.icon className="w-6 h-6 mx-auto mb-3 text-white" />

              <p className="text-2xl font-bold">
                {stat.value}
              </p>

              <p className="text-sm text-gray-500">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Website Portfolio Pribadi",
    description: "Website portfolio yang saya buat sendiri menggunakan React untuk menampilkan project dan skill saya.",
    status: "Selesai",
  },
  {
    title: "To-Do List App",
    description: "Aplikasi sederhana untuk mencatat tugas harian dengan fitur tambah, hapus, dan checklist.",
    status: "Selesai",
  },
  {
    title: "Kalkulator Sederhana",
    description: "Project latihan JavaScript untuk membuat kalkulator dengan operasi dasar.",
    status: "Selesai",
  },
  {
    title: "Landing Page Website",
    description: "Halaman landing modern yang dibuat untuk latihan desain UI dan responsive.",
    status: "Belajar",
  },
  {
    title: "Python Mini Tools",
    description: "Kumpulan script Python sederhana untuk membantu tugas sehari-hari.",
    status: "Berjalan",
  },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-24 bg-black text-white">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Project Saya
      </h2>

      <div className="max-w-4xl mx-auto px-4">

        <Carousel>
          <CarouselContent>

            {projects.map((project, index) => (
              <CarouselItem key={index}>

                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">

                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    {project.status}
                  </span>

                </div>

              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

      </div>

    </section>
  );
}
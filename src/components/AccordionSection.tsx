import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Lebih Tentang Saya
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4">

        <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-4">
          <AccordionTrigger className="text-lg text-left">
            Teknologi apa yang saya gunakan?
          </AccordionTrigger>

          <AccordionContent className="text-gray-400">
            Saya menggunakan beberapa bahasa pemrograman seperti Python, JavaScript,
            dan C++. Selain itu, saya juga mempelajari HTML dan CSS untuk membuat
            tampilan website yang menarik.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-4">
          <AccordionTrigger className="text-lg text-left">
            Apa yang sedang saya pelajari?
          </AccordionTrigger>

          <AccordionContent className="text-gray-400">
            Saat ini saya sedang memperdalam pemahaman saya dalam dunia web development,
            terutama JavaScript dan pengembangan website modern. Saya juga terus
            melatih logika pemrograman agar semakin berkembang.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-4">
          <AccordionTrigger className="text-lg text-left">
            Apa tujuan saya ke depan?
          </AccordionTrigger>

          <AccordionContent className="text-gray-400">
            Tujuan saya adalah menjadi seorang developer yang handal dan mampu
            membuat project yang bermanfaat. Saya ingin terus belajar dan
            berkembang di bidang teknologi untuk masa depan yang lebih baik.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    </section>
  );
}
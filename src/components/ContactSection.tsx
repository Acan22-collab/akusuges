import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama wajib diisi'),
  email: z.string().trim().email('Email tidak valid'),
  subject: z.string().trim().min(1, 'Subjek wajib diisi'),
  message: z.string().trim().min(1, 'Pesan wajib diisi'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'farizi6772@gmail.com',
    href: 'mailto:emailkamu@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim 🚀',
        description: 'Terima kasih! Saya akan membalas secepat mungkin.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan, coba lagi nanti.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 block mb-2">
            Contact
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hubungi Saya
          </h2>

          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Info */}
          <motion.div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Mari Terhubung 🚀
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Saya terbuka untuk diskusi, kolaborasi, atau sekadar berbagi
                tentang dunia teknologi dan programming. Jangan ragu untuk
                menghubungi saya.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <info.icon className="h-5 w-5 text-white/70" />
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Form */}
          <motion.div>
            <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white/5 border border-white/10 rounded-2xl">

              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Nama" value={formData.name} onChange={handleChange} />
                <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>

              <Input name="subject" placeholder="Subjek" value={formData.subject} onChange={handleChange} />

              <Textarea name="message" placeholder="Tulis pesan..." value={formData.message} onChange={handleChange} />

              <Button
                type="submit"
                className="w-full rounded-full bg-white text-black hover:bg-gray-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
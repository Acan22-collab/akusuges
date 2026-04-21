import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, MessageSquare, Globe } from 'lucide-react';
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
    value: 'kaysanaltaf@gmail.com',
    href: 'mailto:kaysanaltaf@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Indonesia',
    href: '#',
  },
  {
    icon: Globe,
    label: 'Timezone',
    value: 'WIB (GMT+7)',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
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
        title: 'Transmission Success 🚀',
        description: 'Pesan telah diterima. Saya akan segera menghubungi Anda.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Transmission Failed',
        description: 'Terjadi gangguan pada sistem. Silakan coba beberapa saat lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a192f] text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-0" />

      <div className="container mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-3 block">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Conversation</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-cyan-400 w-6 h-6" />
                Let's Build Something
              </h3>
              <p className="text-blue-100/60 leading-relaxed text-lg italic">
                "Setiap baris kode dimulai dengan sebuah percakapan."
              </p>
              <p className="mt-4 text-blue-100/60 leading-relaxed">
                Apakah Anda memiliki ide proyek atau sekadar ingin menyapa? Saya selalu terbuka untuk diskusi teknologi baru.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-5 p-5 bg-[#112240]/40 backdrop-blur-sm border border-blue-400/10 rounded-2xl hover:border-cyan-400/40 hover:bg-[#112240]/60 transition-all group"
                >
                  <div className="p-3 bg-blue-900/40 rounded-xl group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                    <info.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-blue-300/50 mb-1">{info.label}</p>
                    <p className="font-medium text-blue-100 group-hover:text-cyan-300 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 bg-[#112240]/40 backdrop-blur-xl border border-blue-400/10 rounded-3xl shadow-2xl">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input 
                    name="name" 
                    placeholder="Nama Lengkap" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="bg-blue-950/30 border-blue-400/20 focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/50 h-12 rounded-xl transition-all"
                  />
                  {errors.name && <p className="text-[10px] text-red-400 ml-2 font-mono uppercase tracking-tighter">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Input 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="bg-blue-950/30 border-blue-400/20 focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/50 h-12 rounded-xl transition-all"
                  />
                  {errors.email && <p className="text-[10px] text-red-400 ml-2 font-mono uppercase tracking-tighter">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Input 
                  name="subject" 
                  placeholder="Subjek Pesan" 
                  value={formData.subject} 
                  onChange={handleChange}
                  className="bg-blue-950/30 border-blue-400/20 focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/50 h-12 rounded-xl transition-all"
                />
                {errors.subject && <p className="text-[10px] text-red-400 ml-2 font-mono uppercase tracking-tighter">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Textarea 
                  name="message" 
                  placeholder="Ceritakan detail proyek atau pertanyaan Anda..." 
                  value={formData.message} 
                  onChange={handleChange}
                  className="bg-blue-950/30 border-blue-400/20 focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/50 min-h-[150px] rounded-xl pt-4 transition-all"
                />
                {errors.message && <p className="text-[10px] text-red-400 ml-2 font-mono uppercase tracking-tighter">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-blue-600 text-white hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-900/50 overflow-hidden relative group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span>Transmitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
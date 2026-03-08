import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0), // anti-spam
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    if (data.honeypot) return; // bot detected
    setLoading(true);

    try {
      // Simulated send — replace with EmailJS or backend API
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-2xl">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-4" />
          <p className="text-muted-foreground mb-10 text-lg">
            Let's build resilient systems together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot */}
            <input {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="Your name"
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="shimmer-btn w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_100%_50%/0.3)] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
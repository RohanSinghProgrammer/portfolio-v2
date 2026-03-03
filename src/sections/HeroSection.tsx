import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import personal from "@/data/personal.json";
import AnimatedSection from "@/components/AnimatedSection";

export default function HeroSection() {
  const typedText = useTypingEffect(personal.typingTexts, 70, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-sm font-mono text-primary">Available for opportunities</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {personal.headline.map((line, i) => (
                  <span key={i} className="block">
                    {i === 0 ? (
                      <span className="text-gradient-primary">{line}</span>
                    ) : i === 1 ? (
                      <span className="text-foreground">{line}</span>
                    ) : (
                      <span className="text-muted-foreground">{line}</span>
                    )}
                  </span>
                ))}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4">
                {personal.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="h-8 mb-8">
                <span className="font-mono text-primary text-lg">
                  {">"} {typedText}
                  <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink border-r-2 border-primary" />
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="shimmer-btn inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_100%_50%_/_0.3)]"
                >
                  <ExternalLink size={18} />
                  View My Work
                </a>
                <a
                  href="/resume/Rohan-Singh-Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border bg-card text-foreground font-semibold rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Profile image */}
          <AnimatedSection delay={300} className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-md opacity-60" />
              <img
                src="/images/profile-placeholder.jpg"
                alt="Rohan Singh - DevOps Engineer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary/20"
                loading="eager"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
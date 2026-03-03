import { Briefcase } from "lucide-react";
import experience from "@/data/experience.json";
import AnimatedSection from "@/components/AnimatedSection";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experience.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border card-hover">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-primary" />
                      <span className="font-mono text-xs text-primary">{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                    {exp.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {exp.highlights.map((h) => (
                          <span key={h} className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

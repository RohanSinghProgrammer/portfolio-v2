import { Cloud, Code, Database } from "lucide-react";
import skills from "@/data/skills.json";
import AnimatedSection from "@/components/AnimatedSection";

const iconMap: Record<string, any> = { Cloud, Code, Database };

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My DevOps Arsenal</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] || Cloud;
            return (
              <AnimatedSection key={cat.name} delay={ci * 150}>
                <div className="p-6 rounded-xl bg-card border border-border card-hover h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-mono rounded-md bg-muted border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
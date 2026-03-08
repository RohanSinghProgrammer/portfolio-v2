import { ExternalLink } from "lucide-react";
import projects from "@/data/projects.json";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Systems I've Built</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </AnimatedSection>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 150}>
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}>
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-xl border border-border">
                    <iframe
                      src={project.link}
                      title={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-primary/30 text-primary bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-lg bg-card border border-border">
                        <div className="text-xl font-bold text-linear-primary font-mono">{m.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                  >
                    Visit Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
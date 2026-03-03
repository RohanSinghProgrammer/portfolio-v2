import { Code, Package, TestTube, Shield, Rocket, Activity } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";

const steps = [
  { icon: Code, label: "Code", color: "text-primary" },
  { icon: Package, label: "Build", color: "text-accent" },
  { icon: TestTube, label: "Test", color: "text-primary" },
  { icon: Shield, label: "Scan", color: "text-accent" },
  { icon: Rocket, label: "Deploy", color: "text-primary" },
  { icon: Activity, label: "Monitor", color: "text-accent" },
];

export default function PipelineSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="pipeline" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">CI/CD Pipeline</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Every commit triggers an automated journey — from code to production — with security baked into every step.
          </p>
        </AnimatedSection>

        {/* Pipeline visualization */}
        <div ref={ref} className="relative">
          {/* Desktop pipeline */}
          <div className="hidden md:flex items-center justify-between relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-[2s] ease-out"
                style={{
                  width: isInView ? "100%" : "0%",
                  backgroundSize: "200% 100%",
                  animation: isInView ? "pipeline-flow 2s linear infinite" : "none",
                }}
              />
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="relative z-10 flex flex-col items-center gap-3"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease-out ${i * 200}ms`,
                  }}
                >
                  <div className={`p-4 rounded-xl bg-card border border-border card-hover ${isInView ? "glow-border" : ""}`}>
                    <Icon size={28} className={step.color} />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{step.label}</span>

                  {/* Animated dot between steps */}
                  {i < steps.length - 1 && (
                    <div
                      className="absolute top-1/2 -right-[calc(50%-1rem)] w-2 h-2 rounded-full bg-primary -translate-y-1/2"
                      style={{
                        opacity: isInView ? 1 : 0,
                        animation: isInView ? `pulse-glow 1.5s ease-in-out ${i * 0.3}s infinite` : "none",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile pipeline - vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.label} delay={i * 100}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-card border border-border glow-border flex-shrink-0">
                      <Icon size={24} className={step.color} />
                    </div>
                    <div className="flex-1">
                      <span className="font-mono text-sm text-foreground">{step.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-7 mt-14 w-0.5 h-6 bg-primary/30" />
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
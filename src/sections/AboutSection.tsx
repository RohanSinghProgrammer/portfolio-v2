import { Shield, Zap, Bug, Brain } from "lucide-react";
import personal from "@/data/personal.json";
import AnimatedSection from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const milestones = [
  { icon: Zap, label: "Faster Deployments", value: 99, suffix: "%" },
  { icon: Bug, label: "Vulns Eliminated", value: 10, suffix: "+" },
  { icon: Shield, label: "Security Scans Integrated", value: 3, suffix: "" },
  { icon: Brain, label: "AI Engines Built", value: 1, suffix: "" },
];

const timeline = [
  { year: "2023", title: "React Developer Intern", desc: "Where the journey began — building web apps and discovering the world of software." },
  { year: "2024", title: "CI/CD Architect", desc: "Evolved from frontend to pipeline architecture — automating builds, tests, and deployments." },
  { year: "2025", title: "DevOps Engineer at Panini8", desc: "Engineering zero-downtime systems, integrating security-first pipelines, and building AI-driven infrastructure." },
];

function MetricCard({ icon: Icon, label, value, suffix }: typeof milestones[0]) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border card-hover">
      <Icon className="text-primary mb-3" size={28} />
      <span ref={ref} className="text-3xl font-bold text-gradient-primary font-mono">
        {count}{suffix}
      </span>
      <span className="text-sm text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Journey</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary/50 mb-12" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Story */}
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
              {personal.about}
            </p>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-border space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={200 + i * 100}>
                  <div className="relative">
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                    <span className="font-mono text-xs text-primary">{item.year}</span>
                    <h3 className="text-foreground font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Metrics */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <MetricCard key={i} {...m} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

const lines = [
  "$ docker build -t app:latest .",
  "[+] Building 12.3s (14/14) FINISHED",
  "$ trivy image app:latest",
  "Total: 0 (HIGH: 0, CRITICAL: 0)",
  "$ kubectl apply -f deploy.yaml",
  "deployment.apps/app configured",
  "$ echo 'Zero downtime achieved ✓'",
  "Zero downtime achieved ✓",
  "$ sonarqube-scan --quality-gate",
  "Quality Gate: PASSED ✓",
];

export default function TerminalLogs() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const next = [...prev, lines[i % lines.length]];
        if (next.length > 8) next.shift();
        return next;
      });
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-10 hidden lg:block w-80 opacity-20 hover:opacity-40 transition-opacity duration-500">
      <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-3 font-mono text-xs">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </div>
        <div ref={containerRef} className="space-y-1">
          {visibleLines.map((line, i) => (
            <div key={i} className="text-muted-foreground animate-fade-in">
              {line.startsWith("$") ? (
                <span>
                  <span className="text-primary">$</span>{line.slice(1)}
                </span>
              ) : line.includes("✓") || line.includes("PASSED") || line.includes("FINISHED") ? (
                <span className="text-primary">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
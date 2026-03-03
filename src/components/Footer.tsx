import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import social from "@/data/social.json";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">{"<"}</span>
          Rohan Singh
          <span className="text-primary">{" />"}</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href={`mailto:${social.email}`} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

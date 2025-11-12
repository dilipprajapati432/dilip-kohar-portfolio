import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Dilip Kohar. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built</span>
            <span>using React, TailwindCSS & TypeScript</span>
          </div>

          <p className="text-xs text-muted-foreground">
            Pandit Deendayal Energy University
          </p>
        </div>
      </div>
    </footer>
  );
};

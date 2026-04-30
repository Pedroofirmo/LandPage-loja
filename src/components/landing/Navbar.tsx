import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5588000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Ryan%20Cell";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-gold">
            <Smartphone className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Ryan<span className="text-gradient-gold">Cell</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#produtos" className="hover:text-foreground transition-colors">Produtos</a>
          <a href="#troca" className="hover:text-foreground transition-colors">Troca</a>
          <a href="#pagamento" className="hover:text-foreground transition-colors">Pagamento</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </div>
        <Button variant="hero" size="sm" asChild>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Fale conosco</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;

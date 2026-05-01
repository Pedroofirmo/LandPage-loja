import { Button } from "@/components/ui/button";
import logo from "@/assets/ryancell-logo.png";

const WHATSAPP = "https://wa.me/5588992266796?text=Ol%C3%A1%20Ryan%20Cell%21%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20comprar%20um%20aparelho%20%F0%9F%93%B1.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Ryan Cell Importados">
          <img src={logo} alt="Ryan Cell Importados" className="h-12 w-auto object-contain" />
          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            <span className="text-white">Ryan</span> <span className="text-gradient-gold">Cell</span>
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

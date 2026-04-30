import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
            <Smartphone className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-foreground">Ryan Cell</span>
          <span>· Ubajara/CE</span>
        </div>
        <div>© {new Date().getFullYear()} Ryan Cell. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from "@/assets/ryancell-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ryan Cell Importados" className="h-9 w-auto object-contain" />
          <span>· Ubajara/CE</span>
        </div>
        <div>© {new Date().getFullYear()} João Pedro Firmo, direitos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;

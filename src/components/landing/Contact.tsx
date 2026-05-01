import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Clock, Instagram } from "lucide-react";
import clientesImg from "@/assets/clientes-ryancell.jpg";
import estoqueImg from "@/assets/estoque-ryancell.jpg";

const WHATSAPP = "https://wa.me/5588992266796?text=Ol%C3%A1%20Ryan%20Cell%21%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20comprar%20um%20aparelho%20%F0%9F%93%B1.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" aria-hidden />
      <div className="container relative">
        <div className="rounded-[2.5rem] bg-card-gradient border border-border p-8 md:p-16 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Visite nossa loja</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Estamos no coração de <span className="text-gradient-gold">Ubajara</span>.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Venha tomar um café, conhecer os aparelhos pessoalmente e fazer o melhor negócio da sua vida.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="text-muted-foreground text-sm">Centro de Ubajara<br />Ubajara — Ceará</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Horário</div>
                    <div className="text-muted-foreground text-sm">Seg a Sáb · 08h às 18h</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="https://www.instagram.com/ryan_cll_ubajara_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" /> Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/30 shadow-elegant group">
                <img
                  src={clientesImg}
                  alt="Clientes satisfeitos da Ryan Cell Importados em Ubajara/CE"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-gold">
                    Nossos clientes
                  </span>
                  <span className="text-xs text-foreground/90">Quem nos visita, sai feliz</span>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-primary/30 shadow-elegant group bg-background">
                <img
                  src={estoqueImg}
                  alt="Mais de 200 aparelhos em estoque na Ryan Cell — iPhones, Xiaomi, Redmi e tablets"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-gold">
                    Estoque
                  </span>
                  <span className="text-xs text-foreground/90">+200 aparelhos para você escolher</span>
                </div>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Localização Ryan Cell - Ubajara CE"
                  src="https://www.google.com/maps?q=Centro+Ubajara+Ceara&output=embed"
                  className="absolute inset-0 w-full h-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

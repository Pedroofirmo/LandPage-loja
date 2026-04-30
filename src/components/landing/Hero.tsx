import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-iphone.jpg";

const WHATSAPP = "https://wa.me/5588000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Ryan%20Cell";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 bg-hero">
      {/* glow orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-glow-pulse" aria-hidden />
      <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary-glow/10 blur-3xl" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Ubajara · Ceará
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter">
            Seu próximo <span className="text-gradient-gold">iPhone</span> está aqui.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            iPhones, Xiaomi, celulares e tablets — novos e semi-novos.
            Damos seu aparelho atual como entrada e parcelamos no cartão. Confiança e qualidade que você merece.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Comprar agora <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#produtos">Ver produtos</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            {[
              { k: "100%", v: "Garantia" },
              { k: "12x", v: "no cartão" },
              { k: "5%", v: "OFF no Pix" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient-gold">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elegant border border-border">
            <img
              src={heroImage}
              alt="iPhone premium em destaque na Ryan Cell"
              width={1536}
              height={1536}
              className="w-full h-full object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card-gradient border border-border p-4 shadow-elegant flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Loja física</div>
              <div className="text-xs text-muted-foreground">Centro · Ubajara/CE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

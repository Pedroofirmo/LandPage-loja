import tradeImg from "@/assets/trade-in.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP = "https://wa.me/5588000000000?text=Ol%C3%A1%2C%20quero%20avaliar%20meu%20iPhone%20para%20entrada";

const benefits = [
  "Avaliação rápida e justa do seu aparelho",
  "Use como entrada na compra do novo",
  "Parcele o restante no cartão em até 12x",
  "Sem burocracia, tudo na hora",
];

const TradeIn = () => {
  return (
    <section id="troca" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-50" aria-hidden />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src={tradeImg}
              alt="Troca de iPhone como entrada na Ryan Cell"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-5 shadow-gold rotate-3">
            <div className="font-display text-3xl font-bold">+R$</div>
            <div className="text-xs font-semibold uppercase tracking-wider">na entrada</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Troca com vantagem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Damos seu iPhone <br />
            <span className="text-gradient-gold">na entrada</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Traga seu aparelho atual, fazemos a avaliação e abatemos o valor diretamente no novo.
            Mais simples, mais rápido, mais vantajoso.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary shrink-0">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>

          <Button variant="hero" size="lg" className="mt-10" asChild>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Avaliar meu aparelho</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TradeIn;

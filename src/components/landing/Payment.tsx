import { CreditCard, Banknote, QrCode, RefreshCw } from "lucide-react";

const methods = [
  { icon: CreditCard, title: "Cartão", desc: "Parcele em até 12x" },
  { icon: QrCode, title: "Pix", desc: "Desconto especial à vista" },
  { icon: Banknote, title: "Dinheiro", desc: "Atendimento na loja" },
  { icon: RefreshCw, title: "Troca", desc: "Seu aparelho como entrada" },
];

const Payment = () => {
  return (
    <section id="pagamento" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Pagamento</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Do seu jeito, <span className="text-gradient-gold">na hora certa</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Você escolhe como pagar. A gente facilita o resto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-card-gradient border border-border p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;

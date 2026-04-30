import iphoneImg from "@/assets/hero-iphone.jpg";
import xiaomiImg from "@/assets/xiaomi.jpg";
import tabletImg from "@/assets/tablet.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP = "https://wa.me/5588000000000?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20aparelho";

const products = [
  { title: "iPhones", desc: "Linha completa, do 8 ao 17 Pro Max. Novos e semi-novos.", img: iphoneImg, tag: "Mais procurado" },
  { title: "Xiaomi", desc: "Redmi, POCO e linha Mi. Performance que impressiona pelo melhor preço.", img: xiaomiImg, tag: "Custo-benefício" },
  { title: "Tablets", desc: "iPad e tablets Android. Ideais para trabalho, estudo e entretenimento.", img: tabletImg, tag: "Versátil" },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Nossos produtos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Tecnologia de ponta, <span className="text-gradient-gold">no seu bolso</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Trabalhamos com aparelhos novos e semi-novos, todos testados e com garantia de 3 meses, acompanhando capinha, carregador e pelicula.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card-gradient border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 left-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-medium border border-border">
                {p.tag}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
                >
                  Consultar modelos
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Quero ver mais modelos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

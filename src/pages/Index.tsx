import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import TradeIn from "@/components/landing/TradeIn";
import Payment from "@/components/landing/Payment";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Ryan Cell — iPhones, Xiaomi e Tablets em Ubajara/CE";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Loja Ryan Cell em Ubajara/CE: iPhones, Xiaomi, Sansung, celulares e tablets novos e semi-novos. Recebemos seu iPhone na entrada, parcelamos no cartão, Pix e dinheiro.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <TradeIn />
        <Payment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

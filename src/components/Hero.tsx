import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-6 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Olá, eu sou <span className="text-primary">Cientista de Dados</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Transformando dados em insights e soluções
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contato">Contato</a>
          </Button>
        </div>
        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
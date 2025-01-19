import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-6 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Olá, eu sou <span className="text-primary">Seu Nome</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Desenvolvedor Full Stack & Designer
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">
            Ver Projetos
          </Button>
          <Button size="lg" variant="outline">
            Contato
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
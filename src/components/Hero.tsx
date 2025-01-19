import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="text-center space-y-8 animate-slide-up px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Olá, eu sou{" "}
          <span className="gradient-text">
            Cientista de Dados
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Transformando dados em insights e soluções
        </p>
        <div className="flex justify-center gap-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-black hover:bg-gray-800 text-white"
            asChild
          >
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
            asChild
          >
            <a href="#contato">Contato</a>
          </Button>
        </div>
        <div className="pt-16 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
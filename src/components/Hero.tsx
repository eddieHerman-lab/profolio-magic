import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="text-center space-y-8 animate-slide-up px-4">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile"
            className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Olá, eu sou{" "}
          <span className="hover-gradient">
            Cientista de Dados
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto hover-gradient">
          Transformando dados em insights e soluções
        </p>
        <div className="flex justify-center gap-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-black hover:bg-gray-800 text-white transition-all duration-300"
            asChild
          >
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300"
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
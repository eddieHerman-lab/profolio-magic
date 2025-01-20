import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="text-center space-y-8 animate-slide-up px-4">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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
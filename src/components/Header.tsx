import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">Meu Portfólio</h1>
          <div className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("sobre")}>Sobre</Button>
            <Button variant="ghost" onClick={() => scrollToSection("habilidades")}>Habilidades</Button>
            <Button variant="ghost" onClick={() => scrollToSection("projetos")}>Projetos</Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")}>Contato</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
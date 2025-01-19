import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter">Meu Portfólio</h1>
          <div className="hidden md:flex gap-8">
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => scrollToSection("sobre")}>Sobre</Button>
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => scrollToSection("habilidades")}>Habilidades</Button>
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => scrollToSection("projetos")}>Projetos</Button>
            <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => scrollToSection("contato")}>Contato</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
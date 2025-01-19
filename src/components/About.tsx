import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter">
          Sobre Mim
        </h2>
        <Card className="max-w-3xl mx-auto bg-white border-2 border-gray-100">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Sou um Cientista de Dados apaixonado por transformar dados em insights
              acionáveis. Com experiência em análise de dados, machine learning e
              visualização de dados, busco constantemente desenvolver soluções que
              impactam positivamente os negócios. Minha jornada inclui projetos em
              diferentes setores, sempre focando em resultados mensuráveis e
              interpretáveis.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
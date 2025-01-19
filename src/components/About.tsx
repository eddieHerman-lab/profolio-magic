import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Sobre Mim
        </h2>
        <Card className="max-w-3xl mx-auto bg-secondary/50">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
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
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
            Sou estudante de Ciência de Dados com um forte interesse em análise e visualização de dados e inteligência artificial. Atualmente, estou cursando faculdade de Ciência de Dados e possuo 4 certificados do Google em Análise de Dados. Estou desenvolvendo meus projetos pessoais que estão me ajudando a proporcionar uma base em Python, Pandas, Numpy, SQL, e algumas técnicas de machine learning. Meu proposito e aprender mais sobre essas bases e criar um fundamento solido de conhecimento nos instrumentos mais usados no mercado de ciência e analise de dados.
            Atualmente estou cursando Faculdade de Ciencia de dados. Estou sempre buscando aprender e expandir minhas habilidades, seja por meio de cursos online ou exploração de novos projetos. Meu objetivo é aplicar meu conhecimento em um ambiente profissional, contribuindo para a solução de problemas e a geração de insights valiosos a partir dos dados.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
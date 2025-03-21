import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, TestTube, Brain, FileBarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Diagnóstico de Câncer de Mama com SVM",
      description: "Um sistema de apoio a diagnóstico de câncer de mama utilizando Support Vector Machines (SVM) com técnicas de Machine Learning, explicabilidade (SHAP e LIME) e visualização interativa. Classifica tumores mamários em benignos e malignos com base no dataset 'Breast Cancer Wisconsin'.",
      tech: ["Python", "SVM", "Machine Learning", "SHAP", "LIME", "Scikit-learn"],
      github: "https://github.com/eddieHerman-lab/cancer-diagnosis-svm",
      live: "#",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      icon: TestTube
    },
    {
      title: "Análise preditiva de preços de diamantes",
      description: "Análise e investigação das relações entre as variáveis de um conjunto de dados de diamantes e prever os preços com base em variáveis como o peso (WEIGHT) e características categóricas.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib","Seaborn"],
      github: "https://github.com/eddieHerman-lab/Analise_Diamantes",
      live: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      icon: FileBarChart
    },
    {
      title: "Sistema de recomendação de filmes",
      description: "Sistema de recomendação utilizando várias abordagens, incluindo recomendações colaborativas simples, baseadas em conteúdo, híbridas e de popularidade.",
      tech: ["Python", "Streamlit", "Flask", "Machine learning"],
      github: "https://github.com/eddieHerman-lab/recommender_system_project",
      live: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      icon: Brain
    },
    {
      title: "Análise Exploratória de vícios de estudantes",
      description: "Análise detalhada de padrões comportamentais e fatores que influenciam vícios em estudantes.",
      tech: ["Python", "Numpy", "pandas", "Matplotlib","Machine learning"],
      github: "https://github.com/eddieHerman-lab/Analise_Student_addiction_Dataset",
      live: "#",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Análise de Sentimento",
      description: "Este projeto utiliza técnicas de processamento de linguagem natural (NLP) para realizar análises de sentimento em textos. A aplicação identifica emoções predominantes (positivas, negativas ou neutras) e gera insights úteis para tomada de decisões baseadas em texto.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib","Seaborn","NLTK"],
      github: "https://github.com/eddieHerman-lab/Analise-de-sentimento",
      live: "#",
      image: "https://buzzmonitor.com.br/wp-content/uploads/from-pyro-cms/capa-sentimento-editada-171218_2.jpg.webp"
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter hover-gradient">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-white border-2 border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
                {project.icon && (
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <project.icon className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl tracking-tight hover-gradient">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 hover-gradient">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 transition-all duration-300" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Análise Preditiva de Vendas",
      description: "Modelo de machine learning para previsão de vendas utilizando séries temporais e análise de fatores sazonais.",
      tech: ["Python", "Scikit-learn", "Pandas", "Prophet"],
      github: "https://github.com/seu-usuario/projeto-vendas",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Dashboard de Métricas",
      description: "Dashboard interativo para visualização de KPIs e métricas de negócio em tempo real.",
      tech: ["Power BI", "SQL", "DAX", "Python"],
      github: "https://github.com/seu-usuario/dashboard-metricas",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Classificação de Imagens",
      description: "Sistema de classificação de imagens utilizando deep learning e redes neurais convolucionais.",
      tech: ["TensorFlow", "Keras", "OpenCV", "NumPy"],
      github: "https://github.com/seu-usuario/classificacao-imagens",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    }
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
                  className="project-image object-cover w-full h-full grayscale"
                />
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
                  <Button variant="outline" size="sm" className="border-2 hover:bg-gray-50 transition-all duration-300" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
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
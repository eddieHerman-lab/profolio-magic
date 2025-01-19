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
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Dashboard de Métricas",
      description: "Dashboard interativo para visualização de KPIs e métricas de negócio em tempo real.",
      tech: ["Power BI", "SQL", "DAX", "Python"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Classificação de Imagens",
      description: "Sistema de classificação de imagens utilizando deep learning e redes neurais convolucionais.",
      tech: ["TensorFlow", "Keras", "OpenCV", "NumPy"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="border-gray-200 hover:bg-gray-50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="border-gray-200 hover:bg-gray-50">
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
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Contato
        </h2>
        <Card className="max-w-xl mx-auto bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-center">Vamos conversar!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="mailto:seu-email@exemplo.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
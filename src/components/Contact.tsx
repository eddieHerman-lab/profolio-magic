
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter">
          Contato
        </h2>
        <Card className="max-w-xl mx-auto bg-white border-2 border-gray-100">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Vamos conversar!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-2 hover:bg-gray-50" asChild>
                <a href="mailto:eduardowhermanson@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="border-2 hover:bg-gray-50" asChild>
                <a href="https://www.linkedin.com/in/eduardo-hermanson-4a5116259/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="border-2 hover:bg-gray-50" asChild>
                <a href="https://github.com/eddieHerman-lab" target="_blank" rel="noopener noreferrer">
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

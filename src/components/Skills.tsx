import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "JavaScript", "HTML5", "CSS3", "Git",
    "SQL", "MongoDB", "Docker", "AWS"
  ];

  return (
    <section id="habilidades" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Habilidades
        </h2>
        <Card className="max-w-3xl mx-auto bg-secondary/50">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
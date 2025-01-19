import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skills = [
    "Python", "R", "SQL", "Machine Learning",
    "Deep Learning", "Pandas", "NumPy", "Scikit-learn",
    "TensorFlow", "Power BI", "Tableau", "Statistics",
    "Data Visualization", "Big Data", "AWS", "Git"
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter">
          Habilidades
        </h2>
        <Card className="max-w-3xl mx-auto bg-white border-2 border-gray-100">
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900"
                >
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
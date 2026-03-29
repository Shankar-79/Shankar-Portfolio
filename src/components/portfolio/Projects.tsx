import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";


const projects = [
  {
    title: "Student_MIS",
    description:
      "Developed database-driven system for managing student records, designed relational schema, and connected MySQL with Python for efficient data operations. ",
    tags: ["HTML","javascript", "MySQL","python","API"],
    image:"/assets/project-1.png",
    link: "https://github.com/Shankar-79/Student-mangement",
  },
  {
    title: "CROB Managemental Tool",
    description:
      "Built responsive full stack website for a team-developed project management platform using reusable components and integrated UI with backend APIs for task workflow updates. .",
    tags: ["React", "Python", "tailwind"],
    image:"/assets/project-2.png",
    link: "https://github.com/CROB-WEB-AGENCY/Project-Management-Tool",
  },
  {
    title: "Voice Assitant",
    description:
      "Built a voice-controlled desktop assistant with wake-word detection, real-time speech recognition, and system automation for executing commands and controlling applications.",
    tags: ["Python", "SpeechRecognition", "Pyttsx3 "],
    image:"/assets/project-3.png",
    link: "https://github.com/Shankar-79/voice-assitance",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-background">
      <div ref={ref} className={`container-wide ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            My Work
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 gap-2 border-primary/30 hover:border-primary"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} /> More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

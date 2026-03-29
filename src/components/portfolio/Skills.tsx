import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const technicalSkills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 65 },
  {name:"Python", level:55}
];

const softSkills = [
  "Logical Thinking",
  "Problem Solving",
  "Focused",
  "Curious",
  "Self-Motivated",
];

const SkillBar = ({ name, level, animate }: { name: string; level: number; animate: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(timer);
    }
  }, [animate, level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "hsl(var(--section-alt))" }}>
      <div ref={ref} className={`container-wide ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            What I Know
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3">
            My Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="font-display text-xl font-semibold mb-6">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  animate={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Soft */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="font-display text-xl font-semibold mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full text-sm font-medium gradient-bg-subtle text-primary border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

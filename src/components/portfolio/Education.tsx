import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "B.E. Information Technology",
    institution: "Goa College of Engineering",
    period: "2023 – 2027",
    current: true,
  },
  {
    title: "Higher Secondary Education",
    institution: "Shri Bhumika Higher Secondary, Parye",
    period: "Completed",
    current: false,
  },
  {
    title: "High School",
    institution: "Dona Leonor Memorial High School, Porvorim",
    period: "Completed",
    current: false,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="education"
      className="section-padding"
      style={{ backgroundColor: "hsl(var(--section-alt))" }}
    >
      <div ref={ref} className={`container-wide ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            My Journey
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3">
            Education
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 gradient-bg" />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-md">
                  <GraduationCap size={20} className="text-primary-foreground" />
                </div>

                {/* Card */}
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg">
                      {item.title}
                    </h3>
                    {item.current && (
                      <span className="text-xs px-3 py-1 rounded-full gradient-bg text-primary-foreground font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

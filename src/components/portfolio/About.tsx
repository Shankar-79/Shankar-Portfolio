import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-wide max-w-4xl mx-auto text-center ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">
          About Me
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 mb-8">
          Get to Know Me
        </h2>

        <div className="space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed text-left lg:text-center">
          <p>
            My name is Shankar Parab, and I am from Goa. I completed my high
            school at Dona Leonor Memorial High School, Porvorim, and my higher
            secondary education at Shri Bhumika Higher Secondary, Parye.
          </p>
          <p>
            I am currently pursuing a Bachelor of Engineering in Information
            Technology at Goa College of Engineering.
          </p>
          <p>
            I consider myself focused, curious, and logical. I enjoy
            understanding concepts deeply and approaching problems with
            structured thinking. My motivation comes from continuous self-growth
            and improving myself both technically and personally.
          </p>
          <p>
            I am passionate about coding and technology, and I strive to build
            applications with clean logic while continuously learning through
            practical projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

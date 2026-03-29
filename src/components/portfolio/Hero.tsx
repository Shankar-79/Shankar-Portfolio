import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg-subtle">
      <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20 lg:pt-0">
        {/* Text */}
        <div className="space-y-6 lg:space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-bg text-primary-foreground">
            IT Engineering Student
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Shankar Parab</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Passionate about coding and solving technical problems while
            continuously improving through practical projects.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity gap-2 rounded-full px-8"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-primary/30 hover:border-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail size={18} /> Contact Me
            </Button>
          </div>
        </div>

        {/* Gradient circle */}
        <div className="relative flex items-center justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full gradient-bg opacity-90 animate-float shadow-2xl flex items-center justify-center">
             <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden   shadow-lg">
            
              <img src="/src/assets/ShankarParab_photo.png" alt="SP"
              className="w-full h-full object-cover" />
            
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
          <div className="absolute bottom-20 left-5 w-2 h-2 rounded-full bg-accent/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-3 gap-10">
         
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold gradient-text">
              Shankar Parab
            </h3>
            <p className="text-sm text-background/60 leading-relaxed">
              IT Engineering Student passionate about building clean, modern web
              applications and continuously improving through practical projects.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://github.com/Shankar-79" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/shankar-parab/" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

      
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Education", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-background/60 hover:text-background text-left transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

         
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-background/60">
        <p>  <a href="mailto:parabshankar79@gmail.com" >parabshankar79@gmail.com</a></p> 
          <p>   <a href="tel:+919850744727">+91 98507 44727</a></p>
             <p>  <a href="https://www.google.com/maps/place/goa  " target="_blank" rel="noopener noreferrer">Goa, India</a></p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-background/10">
        <div className="container-wide py-5 text-center text-xs text-background/40">
          © 2026 Shankar Parab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

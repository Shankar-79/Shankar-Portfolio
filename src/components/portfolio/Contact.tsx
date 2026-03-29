import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:parabshankar79@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding gradient-bg relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div
        ref={ref}
        className={`container-wide relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 text-primary-foreground">
            Let's Connect and Build Something Meaningful
          </h2>
          <p className="text-primary-foreground/70 mt-4 text-lg">
            Open to opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="font-display text-xl font-semibold text-primary-foreground">
              Contact Details
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/50">Email</p>
                  <a href="mailto:parabshankar79@gmail.com" className="text-sm font-medium">parabshankar79@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/50">Phone</p>
                  <a href="tel:+919850744727" className="text-sm font-medium">+91 98507 44727</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/50">Location</p>
                  <a href="https://www.google.com/maps/place/goa
                  " target="_blank" rel="noopener noreferrer" className="text-sm font-medium">Goa, India</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="font-display text-xl font-semibold text-primary-foreground">
              Send Me a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-white/50 transition-colors text-sm resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 gap-2"
            >
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

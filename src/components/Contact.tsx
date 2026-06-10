import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore how I can help with your data analytics initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:saikrishna.sajjanam@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  saikrishna.sajjanam@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+919700269115"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  +91 9700269115
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-sajjanam-analyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth break-all"
                >
                  linkedin.com/in/sai-krishna-sajjanam-analyst
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card border-border hover:shadow-lg transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a
                  href="https://github.com/SaiKrishna-Sajjanam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  github.com/SaiKrishna-Sajjanam
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

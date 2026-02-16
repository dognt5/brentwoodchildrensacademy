import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">B</span>
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-card text-lg block">Brentwood</span>
                <span className="text-card/60 text-xs font-body tracking-wide">Children's Academy</span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-card/60">
              Nurturing young minds with love, laughter, and learning since day one. TRS 4-Star rated childcare in Houston and Deer Park.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-card mb-4">Quick Links</h4>
            <div className="space-y-2 font-body text-sm">
              <a href="#difference" className="block hover:text-primary transition-colors">The Brentwood Difference</a>
              <a href="#programs" className="block hover:text-primary transition-colors">Programs</a>
              <a href="#tuition" className="block hover:text-primary transition-colors">Tuition & Financial Aid</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-card mb-4">Get in Touch</h4>
            <div className="space-y-3 font-body text-sm">
              <a href="tel:713-466-9407" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 713-466-9407
              </a>
              <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@brentwoodchildrensacademy.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 7210 N. Eldridge Pkwy, Houston, TX
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 2202 Center St, Deer Park, TX
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 text-center font-body text-xs text-card/40">
          © {new Date().getFullYear()} Brentwood Children's Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

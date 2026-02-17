import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface CTABlockProps {
  title?: string;
  subtitle?: string;
}

const CTABlock = ({
  title = "Ready to See the Brentwood Difference?",
  subtitle = "Schedule a tour today and discover why families across Houston trust us with their most precious little ones.",
}: CTABlockProps) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent animate-float" />
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-secondary animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/schedule-tour"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule a Tour
            </a>
            <a
              href="/contact"
              className="bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-full text-base font-bold font-body hover:bg-primary-foreground/25 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;

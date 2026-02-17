import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Star, Users, Heart, BookOpen, Sun } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Management",
    description: "Owners with multiple degrees in Education and a Director with 20+ years of experience leading our team.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "4K security cameras, secure keypad entry, and rigorous safety protocols protect your little ones every day.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Star,
    title: "TRS 4-Star Rating",
    description: "The highest rating in Texas, reflecting our commitment to quality care and early childhood education.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Heart,
    title: "Loving Environment",
    description: "Small class sizes ensure every child gets the individual attention, warmth, and encouragement they deserve.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Research-based learning programs that prepare children academically, socially, and emotionally for school.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sun,
    title: "Enrichment Activities",
    description: "Music, art, outdoor play, and STEM activities woven into every day to spark curiosity and creativity.",
    color: "bg-secondary/10 text-secondary",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DifferenceSection = () => {
  return (
    <section id="difference" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body font-bold text-sm uppercase tracking-widest">Why choose us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            The Brentwood Difference
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
            More than daycare — we're a community dedicated to nurturing your child's fullest potential.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/difference"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-md"
          >
            Explore the Brentwood Difference
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;

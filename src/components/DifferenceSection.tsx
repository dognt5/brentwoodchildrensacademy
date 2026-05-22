import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Star, Users, Heart, BookOpen, Sun } from "lucide-react";
import classroomImg from "@/assets/classroom-interior.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Management",
    description: "Owners Hugh & Nidhi Trivedi hold degrees in Education. Our Director brings 20+ years of childcare leadership to every decision.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "4K security cameras, secure keypad entry, CPR-certified staff, and rigorous daily sanitation protocols protect your child every day.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Star,
    title: "TRS 4-Star Rating",
    description: "Texas Rising Star's highest rating — and a Center of Excellence (CoE) participant — reflecting our proven commitment to quality education.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Heart,
    title: "Loving Environment",
    description: "Small class sizes and low ratios mean every child receives individual warmth and encouragement. We treat every family like our own.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Research-based Frog Street curriculum builds academic, social, and emotional foundations aligned with Texas state standards.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sun,
    title: "Enrichment Activities",
    description: "Music, art, outdoor play, and STEM activities woven into every day across all age groups to spark curiosity and creativity.",
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
          className="text-center mb-6"
        >
          <span className="text-secondary font-body font-bold text-sm uppercase tracking-widest">Why choose us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            The Brentwood Difference
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
            More than childcare — we're a TRS 4-Star community dedicated to nurturing every child's fullest potential.
          </p>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden h-64 md:h-80"
        >
          <img src={classroomImg} alt="Bright, welcoming Brentwood classroom with books, toys, and children's artwork" className="w-full h-full object-cover object-[center_60%]" loading="lazy" width={1920} height={1080} />
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

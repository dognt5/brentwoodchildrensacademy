import { motion } from "framer-motion";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";

const programs = [
  {
    title: "Infant & Toddler",
    ages: "6 weeks – 2 years",
    description: "A safe, nurturing environment with gentle routines, sensory exploration, and bonding activities that support early development milestones.",
    image: toddlerImg,
  },
  {
    title: "Preschool",
    ages: "3 – 4 years",
    description: "Creative curriculum focusing on literacy, math fundamentals, social skills, and hands-on discovery through play-based learning.",
    image: preschoolImg,
  },
  {
    title: "Pre-Kindergarten",
    ages: "4 – 5 years",
    description: "Comprehensive school-readiness program building confidence, independence, and academic foundations for kindergarten success.",
    image: prekImg,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 md:py-28 bg-green-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Our programs</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Programs for Every Stage
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
            From infants to pre-K, our age-appropriate programs help every child thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold font-body px-3 py-1 rounded-full">
                  {program.ages}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";
import schoolAgeImg from "@/assets/school-age-program.jpg";
import summerImg from "@/assets/summer-camp.jpg";

const programs = [
  {
    title: "Infant & Toddler",
    ages: "6 weeks – 2 years",
    description: "Gentle routines, sensory exploration, and bonding activities that support early development milestones in a safe, nurturing environment.",
    image: toddlerImg,
    link: "/programs/infant-toddler",
  },
  {
    title: "Preschool",
    ages: "3 – 4 years",
    description: "Play-based Frog Street curriculum building literacy, math, social skills, and creative expression through hands-on discovery.",
    image: preschoolImg,
    link: "/programs/preschool",
    objectPosition: "center 40%",
  },
  {
    title: "Pre-Kindergarten",
    ages: "4 – 5 years",
    description: "Comprehensive school-readiness building confidence, independence, and academic foundations for kindergarten success.",
    image: prekImg,
    link: "/programs/pre-kindergarten",
  },
  {
    title: "School Age / Varsity Club",
    ages: "5 – 12 years",
    description: "Before & after-school care with homework help, enrichment activities, and social development in a fun supervised environment.",
    image: schoolAgeImg,
    link: "/programs/school-age",
    objectPosition: "30% 65%",
  },
  {
    title: "Summer Camp",
    ages: "All Ages",
    description: "An exciting summer adventure with themed weeks, field trips, STEAM projects, water play, and creative arts all summer long.",
    image: summerImg,
    link: "/programs/summer-camp",
    objectPosition: "center 40%",
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
            From infants through school age, our age-appropriate programs are designed to help every child thrive. We accept children 6 weeks through 12 years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={program.link}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group block h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: (program as any).objectPosition ?? "center 35%" }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold font-body px-3 py-1 rounded-full">
                    {program.ages}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{program.description}</p>
                  <span className="inline-block mt-4 text-primary font-body font-bold text-sm">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/programs"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-md"
          >
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;

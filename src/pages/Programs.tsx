import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";

const programs = [
  {
    title: "Infant & Toddler",
    ages: "6 weeks – 2 years",
    description: "A safe, nurturing environment with gentle routines, sensory exploration, and bonding activities that support early development milestones.",
    image: toddlerImg,
    link: "/programs/infant-toddler",
  },
  {
    title: "Preschool",
    ages: "3 – 4 years",
    description: "Creative curriculum focusing on literacy, math fundamentals, social skills, and hands-on discovery through play-based learning.",
    image: preschoolImg,
    link: "/programs/preschool",
  },
  {
    title: "Pre-Kindergarten",
    ages: "4 – 5 years",
    description: "Comprehensive school-readiness program building confidence, independence, and academic foundations for kindergarten success.",
    image: prekImg,
    link: "/programs/pre-kindergarten",
  },
  {
    title: "School Age / Varsity Club",
    ages: "5 – 12 years",
    description: "Before- and after-school care with homework help, enrichment activities, and social development in a fun, supervised environment.",
    image: toddlerImg,
    link: "/programs/school-age",
  },
  {
    title: "Summer Camp",
    ages: "All Ages",
    description: "An exciting summer adventure filled with field trips, themed weeks, STEM projects, water play, and creative arts to keep kids engaged all summer.",
    image: preschoolImg,
    link: "/programs/summer-camp",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Our Programs"
          title="Programs for Every"
          highlight="Stage"
          subtitle="From infants to school age, our age-appropriate programs help every child thrive with love, learning, and laughter."
        />

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Age-appropriate learning"
              title="Find the Right Program"
              subtitle="Each program is designed to meet the developmental needs of your child's unique stage."
            />

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
                      <span className="inline-block mt-4 text-primary font-body font-bold text-sm">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;

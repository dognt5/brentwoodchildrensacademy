import { motion } from "framer-motion";
import { Shield, Star, Users, Heart, BookOpen, Sun, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";

const features = [
  {
    icon: Users,
    title: "Expert Management",
    description: "Owners with multiple degrees in Education and a Director with 20+ years of experience leading our team.",
    color: "bg-primary/10 text-primary",
    details: [
      "Owners hold advanced degrees in Early Childhood Education",
      "Director with over two decades of childcare leadership",
      "Ongoing professional development for all staff members",
      "Low teacher turnover ensures consistency for your child",
      "Bilingual staff available to serve diverse families",
    ],
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "4K security cameras, secure keypad entry, and rigorous safety protocols protect your little ones every day.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "4K security cameras covering all indoor and outdoor areas",
      "Secure keypad entry — only authorized persons can enter",
      "All staff CPR and First Aid certified",
      "Daily sanitization and health screening procedures",
      "Regular fire drills and emergency preparedness training",
    ],
  },
  {
    icon: Star,
    title: "TRS 4-Star Rating",
    description: "The highest rating in Texas, reflecting our commitment to quality care and early childhood education.",
    color: "bg-accent/20 text-accent-foreground",
    details: [
      "Texas Rising Star 4-Star — the highest possible rating",
      "Meets and exceeds state standards for quality care",
      "Regular evaluations ensure continuous improvement",
      "Recognized for staff qualifications and curriculum quality",
      "Demonstrates commitment to best practices in early education",
    ],
  },
  {
    icon: Heart,
    title: "Loving Environment",
    description: "Small class sizes ensure every child gets the individual attention, warmth, and encouragement they deserve.",
    color: "bg-coral/10 text-coral",
    details: [
      "Small class sizes for personalized attention",
      "Nurturing, family-like atmosphere in every classroom",
      "Positive reinforcement and encouragement-based teaching",
      "Daily communication with families about their child's day",
      "Welcoming environment for children of all backgrounds",
    ],
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Research-based learning programs that prepare children academically, socially, and emotionally for school.",
    color: "bg-primary/10 text-primary",
    details: [
      "Research-based curriculum aligned with state standards",
      "Balanced approach to academics, social, and emotional growth",
      "Age-appropriate learning centers in every classroom",
      "Regular assessments to track developmental progress",
      "Kindergarten readiness program with proven results",
    ],
  },
  {
    icon: Sun,
    title: "Enrichment Activities",
    description: "Music, art, outdoor play, and STEM activities woven into every day to spark curiosity and creativity.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "Daily music, art, and creative expression activities",
      "STEM projects introducing science, technology, and engineering",
      "Outdoor play and physical fitness incorporated daily",
      "Cultural celebrations and community awareness events",
      "Seasonal field trips and special guest visitors",
    ],
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

const Difference = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="⭐ Why Choose Us"
          title="The Brentwood"
          highlight="Difference"
          subtitle="More than daycare — we're a community dedicated to nurturing your child's fullest potential."
        />

        {/* Feature cards overview */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Our promise"
              title="What Sets Us Apart"
              subtitle="Six pillars of excellence that define the Brentwood experience."
            />

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
          </div>
        </section>

        {/* Expanded details for each feature */}
        {features.map((feature, i) => (
          <section
            key={feature.title}
            className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-green-light" : "bg-background"}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">{feature.title}</h2>
                    <p className="text-muted-foreground font-body">{feature.description}</p>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                  {feature.details.map((detail, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.08 }}
                      className="bg-card rounded-xl p-5 border border-border flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-body">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Difference;

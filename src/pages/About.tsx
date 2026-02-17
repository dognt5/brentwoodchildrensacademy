import { motion } from "framer-motion";
import { Heart, Award, Users, BookOpen, Handshake, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";

const values = [
  { icon: Heart, title: "Love & Nurturing", description: "Every child is treated with warmth, patience, and genuine care as part of our extended family." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in early childhood education and care." },
  { icon: Users, title: "Community", description: "We build strong partnerships with families and actively support our local community." },
  { icon: BookOpen, title: "Growth", description: "We foster continuous learning for children, families, and our own team of educators." },
  { icon: Handshake, title: "Integrity", description: "Transparency, honesty, and trust guide every interaction with families and staff." },
  { icon: Clock, title: "Consistency", description: "Reliable routines and dependable care give children and parents peace of mind." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="🏫 About Us"
          title="Our Story &"
          highlight="Mission"
          subtitle="Nurturing young minds with love, laughter, and learning since day one."
        />

        {/* Mission */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader label="Our Mission" title="Why We Do What We Do" />
              <p className="text-muted-foreground font-body text-lg leading-relaxed -mt-8 mb-8">
                At Brentwood Children's Academy, our mission is to provide a safe, nurturing, and stimulating environment where every child can grow, learn, and thrive. We believe that the early years are the most formative — and we're honored to be part of your child's journey during this critical time.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Founded on the belief that every child deserves an exceptional start, we combine expert knowledge in early childhood education with a genuine love for children. Our TRS 4-Star rated centers in Houston and Deer Park serve diverse families with programs designed for every developmental stage.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader label="What we stand for" title="Our Core Values" subtitle="The principles that guide everything we do at Brentwood." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Our team" title="Expert Leadership" subtitle="Our management team brings decades of experience in education and childcare." labelColor="text-secondary" />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Experienced Owners</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our owners hold multiple degrees in Education and bring a deep passion for early childhood development. Their hands-on approach ensures that every aspect of our academy reflects the highest standards in the field.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Dedicated Director</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  With over 20 years of experience in childcare leadership, our Director brings unmatched expertise in curriculum development, staff training, and creating a loving learning environment for every child.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 md:py-28 bg-cream-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader label="Community involvement" title="Part of Your Community" />
              <p className="text-muted-foreground font-body text-lg leading-relaxed -mt-8 mb-6">
                Brentwood Children's Academy is proud to be an active member of the Houston and Deer Park communities. We partner with local organizations, participate in community events, and welcome families from all backgrounds. Our Se Habla Español commitment ensures bilingual families feel right at home.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                We believe that strong communities raise strong children, and we're committed to making a positive impact beyond our classroom walls.
              </p>
            </div>
          </div>
        </section>

        <CTABlock title="Join the Brentwood Family" subtitle="Schedule a visit and see firsthand what makes our academy special." />
      </main>
      <Footer />
    </div>
  );
};

export default About;

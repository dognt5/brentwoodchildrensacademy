import { motion } from "framer-motion";
import { DollarSign, FileText, Gift, Users, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";

const tuitionCards = [
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "We offer transparent, competitive pricing with no hidden fees. Our rates reflect the high quality of care and education your child receives.",
    color: "bg-primary/10 text-primary",
    details: [
      "Age-appropriate pricing tiers",
      "Weekly and monthly payment options",
      "No registration or hidden fees",
      "Transparent billing statements",
    ],
  },
  {
    icon: FileText,
    title: "Subsidy Assistance",
    description: "We proudly accept CCMS and Workforce Solutions subsidies to help make quality childcare accessible for all families in our community.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "CCMS (Child Care Management Services) accepted",
      "Workforce Solutions subsidies welcome",
      "Our team helps guide you through the application process",
      "We work directly with subsidy programs on your behalf",
    ],
  },
  {
    icon: Users,
    title: "Sibling Discounts",
    description: "Families with multiple children enrolled receive generous sibling discounts, making quality care affordable for your whole family.",
    color: "bg-accent/20 text-accent-foreground",
    details: [
      "Discounts for second and additional children",
      "Available across all age programs",
      "Combined with other financial aid options",
      "Contact us for family rate details",
    ],
  },
  {
    icon: Gift,
    title: "Current Promotions",
    description: "Take advantage of our latest enrollment offers. New Deer Park location now open with special introductory rates!",
    color: "bg-coral/10 text-coral",
    details: [
      "New Deer Park location enrollment specials",
      "Seasonal promotional rates available",
      "Referral bonus program for current families",
      "Ask about our limited-time offers",
    ],
  },
];

const Tuition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="💰 Tuition & Financial Aid"
          title="Affordable Quality"
          highlight="Care"
          subtitle="We believe every family deserves access to exceptional childcare. We offer flexible options to fit your budget."
        />

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Investment in their future"
              title="Tuition Options"
              subtitle="Quality early childhood education is one of the best investments you can make. We offer several ways to make it affordable."
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tuitionCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-5">{card.description}</p>
                  <ul className="space-y-2">
                    {card.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground font-body text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title="Questions About Tuition?"
          subtitle="Our friendly team is here to help you find the best option for your family. Call us today for personalized pricing."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tuition;

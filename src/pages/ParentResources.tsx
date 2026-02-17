import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, Camera, FileText, HelpCircle, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const resources = [
  {
    icon: MessageSquare,
    title: "Parent Testimonials",
    description: "Hear from families who trust Brentwood Children's Academy with their little ones. Real stories from real parents.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Camera,
    title: "Photo Gallery",
    description: "Take a virtual tour through our classrooms, playgrounds, and special events. See our academy in action.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: FileText,
    title: "Enrollment Information",
    description: "Everything you need to know about enrolling your child, from required documents to start dates.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description: "Stay up to date with the latest happenings, events, and announcements from Brentwood Children's Academy.",
    color: "bg-coral/10 text-coral",
  },
];

const faqs = [
  {
    question: "What are your hours of operation?",
    answer: "Both our Houston and Deer Park locations are open Monday through Friday, 6:00 AM to 6:30 PM. We are closed on major holidays.",
  },
  {
    question: "What ages do you accept?",
    answer: "We accept children from 6 weeks through 12 years of age. Our programs include Infant & Toddler, Preschool, Pre-Kindergarten, School Age / Varsity Club, and Summer Camp.",
  },
  {
    question: "Do you accept subsidies?",
    answer: "Yes! We accept CCMS (Child Care Management Services) and Workforce Solutions subsidies. Our team can help guide you through the application process.",
  },
  {
    question: "What is your teacher-to-child ratio?",
    answer: "We maintain ratios that meet or exceed Texas state requirements. Our small class sizes ensure every child receives personalized attention and care.",
  },
  {
    question: "Is there a waiting list?",
    answer: "Availability varies by age group and location. We recommend scheduling a tour and inquiring about current openings as early as possible.",
  },
  {
    question: "What should my child bring on the first day?",
    answer: "We'll provide a detailed checklist during enrollment. Generally, you'll need a change of clothes, diapers/pull-ups (if applicable), comfort item, and completed enrollment forms.",
  },
  {
    question: "Do you provide meals and snacks?",
    answer: "We provide nutritious snacks throughout the day. Families are welcome to pack lunches, and we can accommodate allergies and dietary restrictions with advance notice.",
  },
  {
    question: "How do you handle emergencies?",
    answer: "All staff are CPR and First Aid certified. We have comprehensive emergency action plans, conduct regular drills, and maintain direct communication with parents during any incident.",
  },
];

const ParentResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="📚 Resources"
          title="Parent"
          highlight="Resources"
          subtitle="Helpful information, answers to common questions, and everything you need as a Brentwood family."
        />

        {/* Resource Cards */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="For families"
              title="Helpful Resources"
              subtitle="Quick access to the information you need most."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {resources.map((resource, i) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className={`w-14 h-14 rounded-xl ${resource.color} flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader label="What parents say" title="Testimonials" subtitle="Real feedback from the families we serve." labelColor="text-secondary" />
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Maria G.", text: "Brentwood has been an absolute blessing for our family. Our daughter has thrived in the preschool program and comes home excited to tell us what she learned every day.", stars: 5 },
                { name: "James & Lisa T.", text: "The safety and security at Brentwood gives us total peace of mind. The teachers genuinely love the kids, and you can see it in how happy our son is every morning at drop-off.", stars: 5 },
                { name: "Sarah M.", text: "We've tried other daycares before, but nothing compares to Brentwood. The curriculum is excellent, the communication is great, and the staff truly cares. We're Brentwood for life!", stars: 5 },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <span key={j} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-foreground font-body leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-primary font-body font-bold text-sm">— {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Common questions" title="Frequently Asked Questions" subtitle="Quick answers to the questions we hear most from parents." />
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="font-body font-bold text-foreground text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTABlock title="Still Have Questions?" subtitle="We're here to help. Reach out anytime — we'd love to hear from you." />
      </main>
      <Footer />
    </div>
  );
};

export default ParentResources;

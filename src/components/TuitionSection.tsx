import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DollarSign, FileText, Gift } from "lucide-react";

const TuitionSection = () => {
  return (
    <section id="tuition" className="py-20 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Tuition & Financial Aid</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Affordable Quality Care
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
            We believe every family deserves access to exceptional childcare. We offer flexible options to fit your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: DollarSign,
              title: "Competitive Rates",
              description: "Transparent pricing with no hidden fees. Ask about our sibling discounts and multi-child family rates.",
              color: "bg-primary/10 text-primary",
            },
            {
              icon: FileText,
              title: "Subsidy Assistance",
              description: "We accept CCMS and Workforce Solutions subsidies to help make quality childcare accessible for all families.",
              color: "bg-secondary/10 text-secondary",
            },
            {
              icon: Gift,
              title: "Current Promotions",
              description: "Call today to learn about our special enrollment promotions and seasonal offers.",
              color: "bg-accent/20 text-accent-foreground",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
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
            to="/tuition"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-md"
          >
            Learn More About Tuition
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TuitionSection;

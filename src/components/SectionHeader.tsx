import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  labelColor?: string;
}

const SectionHeader = ({ label, title, subtitle, labelColor = "text-primary" }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <span className={`${labelColor} font-body font-bold text-sm uppercase tracking-widest`}>{label}</span>
    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;

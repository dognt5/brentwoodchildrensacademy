import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Trees,
  Bus,
  Hand,
  Heart,
  ShieldCheck,
  Baby,
  Star,
} from "lucide-react";

const features = [
  { icon: Sparkles, label: "STEAM", bg: "bg-secondary", fg: "text-secondary-foreground" },
  { icon: BookOpen, label: "HATCH Curriculum", bg: "bg-primary", fg: "text-primary-foreground" },
  { icon: Trees, label: "3 Playgrounds", bg: "bg-accent", fg: "text-accent-foreground" },
  { icon: Bus, label: "Field Trips", bg: "bg-coral", fg: "text-secondary-foreground" },
  { icon: Hand, label: "Hands-On Learning", bg: "bg-green-dark", fg: "text-primary-foreground" },
  { icon: Heart, label: "Caring Teachers", bg: "bg-secondary", fg: "text-secondary-foreground" },
  { icon: ShieldCheck, label: "Safe, Nurturing Environment", bg: "bg-primary", fg: "text-primary-foreground" },
  { icon: Baby, label: "Ages Infant to School Age", bg: "bg-accent", fg: "text-accent-foreground" },
  { icon: Star, label: "TRS Highest Star Rating", bg: "bg-coral", fg: "text-secondary-foreground" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-sky pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        {/* dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-bold text-sm px-4 py-1.5 rounded-full shadow-md">
            <Star className="h-4 w-4 fill-current" /> TRS 4-Star Rated • Houston, TX
          </span>
        </motion.div>

        {/* Center heading with surrounding feature badges */}
        <div className="relative mx-auto max-w-6xl">
          {/* Grid layout: features around the heading */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center">
            {/* Left column features (desktop) */}
            <div className="hidden md:flex flex-col gap-6">
              <FeatureBadge {...features[0]} delay={0.1} align="right" />
              <FeatureBadge {...features[1]} delay={0.2} align="right" />
              <FeatureBadge {...features[2]} delay={0.3} align="right" />
            </div>

            {/* Center heading */}
            <div className="col-span-2 md:col-span-3 text-center px-2">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
              >
                <span className="block text-foreground">Brentwood</span>
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-primary font-display">
                  Children's Academy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-base md:text-lg text-muted-foreground font-body max-w-md mx-auto"
              >
                Where children laugh, learn, and grow — every single day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                <Link
                  to="/schedule-tour"
                  className="bg-secondary text-secondary-foreground px-7 py-3 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule a Tour
                </Link>
                <Link
                  to="/difference"
                  className="bg-card text-foreground border-2 border-border px-7 py-3 rounded-full text-base font-bold font-body hover:bg-muted transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right column features (desktop) */}
            <div className="hidden md:flex flex-col gap-6">
              <FeatureBadge {...features[3]} delay={0.1} align="left" />
              <FeatureBadge {...features[4]} delay={0.2} align="left" />
              <FeatureBadge {...features[5]} delay={0.3} align="left" />
            </div>
          </div>

          {/* Bottom row features (desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
            <FeatureBadge {...features[6]} delay={0.4} align="center" />
            <FeatureBadge {...features[7]} delay={0.45} align="center" />
            <FeatureBadge {...features[8]} delay={0.5} align="center" />
          </div>

          {/* Mobile grid: all 9 features */}
          <div className="md:hidden grid grid-cols-2 gap-3 mt-10">
            {features.map((f, i) => (
              <FeatureBadge key={f.label} {...f} delay={0.1 + i * 0.05} align="center" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 30C360 70 720 0 1080 30C1260 50 1380 70 1440 70V80H0V30Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

interface FeatureBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  bg: string;
  fg: string;
  delay: number;
  align: "left" | "right" | "center";
}

const FeatureBadge = ({ icon: Icon, label, bg, fg, delay, align }: FeatureBadgeProps) => {
  const justify =
    align === "left" ? "md:justify-start" : align === "right" ? "md:justify-end" : "justify-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.03 }}
      className={`flex items-center gap-2 ${justify}`}
    >
      <div className="flex items-center gap-2 bg-card border border-border rounded-2xl px-3 py-2 shadow-md hover:shadow-lg transition-shadow w-full md:w-auto">
        <span className={`flex items-center justify-center h-9 w-9 rounded-xl ${bg} ${fg} shrink-0`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-body font-bold text-xs sm:text-sm text-foreground leading-tight">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default HeroSection;

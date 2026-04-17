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
  Sun,
  Cloud,
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
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-sky pt-12 pb-24 md:pt-16 md:pb-32">
      {/* Layered colored blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-coral/20 blur-3xl" />

        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Decorative SVG squiggles & shapes */}
        <svg
          className="absolute top-10 left-6 md:left-16 h-12 w-24 text-coral opacity-70"
          viewBox="0 0 100 30"
          fill="none"
        >
          <path
            d="M2 15 Q 15 2, 30 15 T 60 15 T 98 15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <svg
          className="absolute top-24 right-10 md:right-24 h-12 w-24 text-primary opacity-70"
          viewBox="0 0 100 30"
          fill="none"
        >
          <path
            d="M2 15 Q 15 28, 30 15 T 60 15 T 98 15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-4 md:left-12"
        >
          <Sun className="h-10 w-10 text-accent fill-accent/40" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-20 right-8 md:right-20"
        >
          <Cloud className="h-12 w-12 text-primary fill-primary/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-6 md:right-32"
        >
          <Sparkles className="h-8 w-8 text-coral" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute bottom-40 left-8 md:left-24"
        >
          <Star className="h-7 w-7 text-secondary fill-secondary/60" />
        </motion.div>

        {/* Small triangles & circles */}
        <div className="absolute top-1/2 left-2 h-4 w-4 rotate-45 bg-coral/60 rounded-sm" />
        <div className="absolute top-1/4 right-2 h-3 w-3 rounded-full bg-secondary/70" />
        <div className="absolute bottom-1/3 left-1/2 h-3 w-3 rounded-full bg-accent/70" />
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center">
            {/* Left column features (desktop) */}
            <div className="hidden md:flex flex-col gap-6">
              <FeatureBadge {...features[0]} delay={0.1} align="right" tilt={-3} floatDelay={0} />
              <FeatureBadge {...features[1]} delay={0.2} align="right" tilt={2} floatDelay={0.4} />
              <FeatureBadge {...features[2]} delay={0.3} align="right" tilt={-2} floatDelay={0.8} />
            </div>

            {/* Center heading */}
            <div className="col-span-2 md:col-span-3 text-center px-2 relative">
              {/* Flanking sparkles */}
              <Sparkles className="hidden md:block absolute -top-2 -left-2 h-7 w-7 text-coral animate-pulse" />
              <Star className="hidden md:block absolute -top-4 -right-2 h-7 w-7 text-secondary fill-secondary/70" />

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
              >
                <span className="relative inline-block">
                  <span className="block text-gradient-primary">Brentwood</span>
                  {/* Hand-drawn underline swoosh */}
                  <svg
                    className="absolute left-0 -bottom-3 w-full h-4 text-coral"
                    viewBox="0 0 300 20"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 12 Q 75 2, 150 10 T 295 8"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <span className="block mt-5 text-2xl sm:text-3xl md:text-4xl text-primary font-display font-bold">
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
              <FeatureBadge {...features[3]} delay={0.1} align="left" tilt={3} floatDelay={0.2} />
              <FeatureBadge {...features[4]} delay={0.2} align="left" tilt={-2} floatDelay={0.6} />
              <FeatureBadge {...features[5]} delay={0.3} align="left" tilt={2} floatDelay={1} />
            </div>
          </div>

          {/* Decorative garland divider */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-12 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            <span className="h-1 w-12 rounded-full bg-accent" />
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="h-1 w-20 rounded-full bg-primary/60" />
            <Star className="h-4 w-4 text-coral fill-coral" />
            <span className="h-1 w-20 rounded-full bg-primary/60" />
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="h-1 w-12 rounded-full bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          </div>

          {/* Bottom row features (desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            <FeatureBadge {...features[6]} delay={0.4} align="center" tilt={-2} floatDelay={0.3} />
            <FeatureBadge {...features[7]} delay={0.45} align="center" tilt={2} floatDelay={0.7} />
            <FeatureBadge {...features[8]} delay={0.5} align="center" tilt={-3} floatDelay={1.1} />
          </div>

          {/* Mobile grid: all 9 features */}
          <div className="md:hidden grid grid-cols-2 gap-3 mt-10">
            {features.map((f, i) => (
              <FeatureBadge
                key={f.label}
                {...f}
                delay={0.1 + i * 0.05}
                align="center"
                tilt={i % 2 === 0 ? -2 : 2}
                floatDelay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Layered bottom waves */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 80 480 10 720 30C960 50 1200 80 1440 50V100H0V40Z"
            fill="hsl(var(--coral) / 0.35)"
          />
          <path
            d="M0 60C360 100 720 20 1080 50C1260 65 1380 80 1440 80V100H0V60Z"
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
  tilt?: number;
  floatDelay?: number;
}

const FeatureBadge = ({
  icon: Icon,
  label,
  bg,
  fg,
  delay,
  align,
  tilt = 0,
  floatDelay = 0,
}: FeatureBadgeProps) => {
  const justify =
    align === "left" ? "md:justify-start" : align === "right" ? "md:justify-end" : "justify-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 0 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
        rotate: tilt,
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        rotate: { duration: 0.5, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{ y: -6, scale: 1.05, rotate: 0 }}
      className={`flex items-center gap-2 ${justify}`}
    >
      <div
        className={`flex items-center gap-2 ${bg} ${fg} rounded-2xl pl-2 pr-4 py-2 shadow-lg hover:shadow-xl transition-shadow w-full md:w-auto border-2 border-card/40`}
      >
        <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-card/90 text-foreground shrink-0 shadow-inner">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-body font-bold text-xs sm:text-sm leading-tight">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export default HeroSection;

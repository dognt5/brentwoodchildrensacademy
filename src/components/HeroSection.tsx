import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy children learning and playing at Brentwood Children's Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent text-accent-foreground font-body font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              ⭐ TRS 4-Star Rated
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-tight text-card mb-6"
          >
            Where Children{" "}
            <span className="text-accent">Laugh</span>, Learn & <span className="text-coral">Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-card/80 font-body mb-8 max-w-lg"
          >
            Your child's future starts bright here. Two convenient locations in Houston and Deer Park serving families with love and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/schedule-tour"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Tour
            </Link>
            <Link
              to="/difference"
              className="bg-card/15 backdrop-blur-sm text-card border-2 border-card/30 px-8 py-4 rounded-full text-base font-bold font-body hover:bg-card/25 transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 80 1440 80V100H0V40Z"
            fill="hsl(42, 33%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

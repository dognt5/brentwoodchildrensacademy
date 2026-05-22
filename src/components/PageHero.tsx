import { motion } from "framer-motion";
import heroImage from "@/assets/hero-children.jpg";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ badge, title, highlight, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image || heroImage}
          alt={title}
          className="w-full h-full object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-accent text-accent-foreground font-body font-bold text-sm px-4 py-1.5 rounded-full mb-6">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-tight text-card mb-6"
          >
            {title}
            {highlight && <span className="text-accent"> {highlight}</span>}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-card/80 font-body max-w-lg"
            >
              {subtitle}
            </motion.p>
          )}
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

export default PageHero;

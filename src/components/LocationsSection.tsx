import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Houston Location",
    address: "7210 N. Eldridge Pkwy, Houston, TX 77041",
    phone: "713-466-9407",
    hours: "Mon–Fri: 6:00 AM – 6:30 PM",
    mapUrl: "https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body font-bold text-sm uppercase tracking-widest">Locations</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
            Our Location
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-2xl mx-auto">
            Proudly serving families in the Greater Houston area.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              {loc.isNew && (
                <span className="absolute -top-3 right-6 bg-secondary text-secondary-foreground text-xs font-bold font-body px-3 py-1 rounded-full">
                  NEW!
                </span>
              )}
              <h3 className="font-display font-bold text-xl text-foreground mb-4">{loc.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground font-body">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {loc.address}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-body">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-body">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-primary/10 text-primary font-bold font-body text-sm px-5 py-2.5 rounded-full hover:bg-primary/20 transition-colors"
              >
                Get Directions
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

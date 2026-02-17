import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const locations = [
  {
    name: "Houston / Eldridge Location",
    address: "7210 N. Eldridge Pkwy, Houston, TX 77041",
    phone: "713-466-9407",
    hours: "Mon–Fri: 6:00 AM – 6:30 PM",
    mapUrl: "https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041",
  },
  {
    name: "Deer Park Location",
    address: "2202 Center St, Deer Park, TX 77536",
    phone: "713-466-9407",
    hours: "Mon–Fri: 6:00 AM – 6:30 PM",
    mapUrl: "https://maps.google.com/?q=2202+Center+St+Deer+Park+TX+77536",
    isNew: true,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="📞 Contact Us"
          title="Get in"
          highlight="Touch"
          subtitle="We'd love to hear from you. Reach out with questions, tour requests, or just to say hello."
        />

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and a member of our team will respond within one business day.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(713) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a topic</option>
                      <option>Enrollment Inquiry</option>
                      <option>Tour Request</option>
                      <option>Tuition & Financial Aid</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" rows={5} placeholder="How can we help?" />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact info + locations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Quick contact */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-5">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:713-466-9407" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-semibold">713-466-9407</span>
                    </a>
                    <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-semibold">info@brentwoodchildrensacademy.com</span>
                    </a>
                  </div>
                </div>

                {/* Business hours */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 font-body">
                    <div className="flex justify-between text-foreground">
                      <span>Monday – Friday</span>
                      <span className="font-semibold">6:00 AM – 6:30 PM</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Saturday – Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                {locations.map((loc) => (
                  <div key={loc.name} className="relative bg-card rounded-2xl p-8 border border-border">
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
                      className="mt-5 inline-block bg-primary/10 text-primary font-bold font-body text-sm px-5 py-2.5 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

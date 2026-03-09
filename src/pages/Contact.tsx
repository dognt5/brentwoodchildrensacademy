import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import familiesImg from "@/assets/families-dropoff.jpg";
import exteriorImg from "@/assets/center-exterior.jpg";

const locations = [
  {
    name: "Houston / Eldridge Location",
    address: "7210 N. Eldridge Pkwy, Houston, TX 77041",
    phone: "713-466-9407",
    email: "info@brentwoodchildrensacademy.com",
    hours: "Mon–Fri: 6:30 AM – 6:00 PM",
    mapUrl: "https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041",
    directions: "Located off N. Eldridge Pkwy near Hwy 6, easily accessible from Northwest Houston and Katy area.",
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
          subtitle="We'd love to hear from you. Reach out with enrollment questions, tour requests, or anything at all — we're always happy to help."
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
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and a member of our friendly team will respond within one business day. We welcome questions in English and Spanish.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(713) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Topic</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select a topic</option>
                        <option>Enrollment Inquiry</option>
                        <option>Tour Request</option>
                        <option>Tuition & Financial Aid</option>
                        <option>Program Information</option>
                        <option>Subsidy / CCMS Questions</option>
                        <option>General Question</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Preferred Location</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select location</option>
                        <option>Houston / Eldridge</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" rows={5} placeholder="How can we help you today?" />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
                  >
                    Send Message →
                  </button>
                  <p className="text-muted-foreground font-body text-xs">
                    We typically respond within one business day. For urgent matters, please call us directly.
                  </p>
                </form>
              </motion.div>

              {/* Contact info + locations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src={familiesImg} alt="Welcoming staff at Brentwood Children's Academy" className="w-full h-full object-cover" />
                </div>

                {/* Quick contact */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:713-466-9407" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold block">713-466-9407</span>
                        <span className="text-muted-foreground text-xs">Mon–Fri, 6:00 AM – 6:30 PM</span>
                      </div>
                    </a>
                    <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm break-all">info@brentwoodchildrensacademy.com</span>
                    </a>
                  </div>
                </div>

                {/* Business hours */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 font-body">
                    <div className="flex justify-between text-foreground text-sm">
                      <span>Monday – Friday</span>
                      <span className="font-semibold">6:00 AM – 6:30 PM</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>Saturday – Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>Major Holidays</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground font-body text-xs">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Tour hours: Mon–Fri, 9:00 AM – 4:00 PM (by appointment)</span>
                  </div>
                </div>

                {/* Locations */}
                {locations.map((loc) => (
                  <div key={loc.name} className="relative bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-display font-bold text-lg text-foreground mb-4">{loc.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold text-foreground">
                            {loc.address}
                          </a>
                          <p className="text-xs mt-1">{loc.directions}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-primary/10 text-primary font-bold font-body text-sm px-5 py-2.5 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exterior photo */}
        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden h-64 md:h-80 mb-10">
                <img src={exteriorImg} alt="Brentwood Children's Academy building exterior" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  We'd Love to Meet Your Family
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
                  Whether you have a quick question, need information on enrollment, or are ready to schedule a tour — we're here for you. Don't hesitate to reach out in whatever way is most convenient.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

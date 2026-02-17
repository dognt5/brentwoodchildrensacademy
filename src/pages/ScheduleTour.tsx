import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const ScheduleTour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="📅 Visit Us"
          title="Schedule a"
          highlight="Tour"
          subtitle="Come see our classrooms, meet our teachers, and discover why families love Brentwood."
        />

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Left - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Request a Tour
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and we'll get back to you within one business day to schedule your visit.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Parent Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(713) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Child's Age</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select age range</option>
                        <option>6 weeks – 1 year</option>
                        <option>1 – 2 years</option>
                        <option>3 – 4 years</option>
                        <option>4 – 5 years</option>
                        <option>5 – 12 years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Preferred Location</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select location</option>
                        <option>Houston / Eldridge</option>
                        <option>Deer Park</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Message (optional)</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" rows={3} placeholder="Any questions or preferred dates?" />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
                  >
                    Request Tour
                  </button>
                </form>
              </motion.div>

              {/* Right - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Prefer to Call?</h3>
                  <a
                    href="tel:713-466-9407"
                    className="flex items-center gap-3 text-foreground font-body text-lg hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block">713-466-9407</span>
                      <span className="text-muted-foreground text-sm">We're happy to answer your questions</span>
                    </div>
                  </a>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    {[
                      "A warm welcome from our management team",
                      "Walk through classrooms and outdoor play areas",
                      "Learn about our curriculum and daily routines",
                      "Discuss tuition, financial aid, and enrollment",
                      "Meet teachers and see our team in action",
                      "Ask any questions — no pressure, just conversation",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground font-body">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Tour Hours</h3>
                  <div className="flex items-center gap-3 text-muted-foreground font-body">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Monday – Friday, 9:00 AM – 4:00 PM</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mt-2">
                    Tours are available by appointment. Walk-ins welcome when possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleTour;

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import familiesImg from "@/assets/families-dropoff.jpg";
import classroomImg from "@/assets/preschool-classroom.jpg";

const ScheduleTour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="📅 Visit Us"
          title="Schedule a"
          highlight="Tour"
          subtitle="Come see our classrooms, meet our teachers, and experience firsthand why families across Houston and Deer Park love Brentwood."
        />

        {/* Trust bar */}
        <section className="py-10 bg-green-light border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { icon: Star, label: "TRS 4-Star Rated", sub: "Texas's Highest Rating" },
                { icon: CheckCircle, label: "No Pressure Tours", sub: "We're here to answer questions" },
                { icon: Phone, label: "713-466-9407", sub: "Call anytime Mon–Fri" },
                { icon: MapPin, label: "2 Convenient Locations", sub: "Houston & Deer Park" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-body font-bold text-foreground text-sm">{item.label}</p>
                    <p className="font-body text-muted-foreground text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Left - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Request a Tour
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and our team will contact you within one business day to confirm your visit. Tours are free, friendly, and absolutely no-pressure.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Parent / Guardian Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Phone Number *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(713) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Child's Age *</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select age range</option>
                        <option>6 weeks – 1 year (Infant)</option>
                        <option>1 – 2 years (Toddler)</option>
                        <option>3 – 4 years (Preschool)</option>
                        <option>4 – 5 years (Pre-K)</option>
                        <option>5 – 12 years (School Age / Varsity Club)</option>
                        <option>Summer Camp Interest</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Preferred Location *</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select location</option>
                        <option>Houston / Eldridge Pkwy</option>
                        <option>Deer Park (New Location)</option>
                        <option>Either location works</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Preferred Date & Time (optional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Tuesday morning or any weekday afternoon" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Questions or Comments</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Anything specific you'd like to discuss or see during your tour?" />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
                  >
                    Request My Tour →
                  </button>
                  <p className="text-muted-foreground font-body text-xs">
                    We respect your privacy. Your information will only be used to schedule your tour.
                  </p>
                </form>
              </motion.div>

              {/* Right - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src={classroomImg} alt="Brentwood Children's Academy classroom" className="w-full h-full object-cover" />
                </div>

                {/* Phone call */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">Prefer to Call?</h3>
                  <a
                    href="tel:713-466-9407"
                    className="flex items-center gap-3 text-foreground font-body text-lg hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block">713-466-9407</span>
                      <span className="text-muted-foreground text-sm">Mon–Fri, 6:00 AM – 6:30 PM</span>
                    </div>
                  </a>
                  <div className="mt-3 border-t border-border pt-3">
                    <a
                      href="mailto:info@brentwoodchildrensacademy.com"
                      className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold">info@brentwoodchildrensacademy.com</span>
                    </a>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">What to Expect on Your Tour</h3>
                  <div className="space-y-3">
                    {[
                      "A warm, no-pressure welcome from our management team",
                      "Walk through age-appropriate classrooms and outdoor play areas",
                      "Learn about our Frog Street curriculum and daily routines",
                      "Discuss tuition, financial aid, and available enrollment spots",
                      "Meet our teachers and see our caring team in action",
                      "Ask any and all questions — we love to share our story",
                      "Receive a take-home enrollment packet with full program details",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground font-body text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Tour Hours</h3>
                  <div className="flex items-center gap-3 text-muted-foreground font-body mb-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Monday – Friday, 9:00 AM – 4:00 PM</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    Tours are available by appointment. Walk-ins are welcome when our schedule allows — call ahead for the best experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Second photo row + reassurance */}
        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img src={familiesImg} alt="Families at Brentwood Children's Academy" className="w-full h-64 object-cover rounded-2xl mb-10" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                You'll Feel It the Moment You Walk In
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
                Every family who tours Brentwood Children's Academy tells us the same thing — they felt welcomed, reassured, and excited about their child's future here. Come see for yourself. We can't wait to meet your family.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleTour;

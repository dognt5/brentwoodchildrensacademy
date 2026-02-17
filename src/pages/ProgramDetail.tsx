import { motion } from "framer-motion";
import { useParams, Navigate } from "react-router-dom";
import { Clock, BookOpen, Shield, Star, Music, Palette, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";

const programData: Record<string, {
  title: string;
  ages: string;
  badge: string;
  image: string;
  overview: string;
  curriculum: string[];
  dailyRoutine: string[];
  enrichment: { icon: React.ElementType; title: string; description: string }[];
  safety: string[];
}> = {
  "infant-toddler": {
    title: "Infant & Toddler Program",
    ages: "6 weeks – 2 years",
    badge: "Ages 6 weeks – 2 years",
    image: toddlerImg,
    overview: "Our Infant & Toddler program provides a warm, secure foundation for your child's earliest years. With low teacher-to-child ratios, gentle daily routines, and sensory-rich environments, we ensure every baby and toddler feels safe, loved, and stimulated. Our experienced caregivers focus on building trust, encouraging exploration, and meeting each child's individual developmental milestones.",
    curriculum: [
      "Sensory exploration stations with age-appropriate materials",
      "Language development through songs, stories, and conversation",
      "Fine and gross motor skill activities",
      "Social-emotional development through guided interactions",
      "Early cognitive development with cause-and-effect toys",
      "Tummy time and movement activities for physical growth",
    ],
    dailyRoutine: [
      "Arrival & free play",
      "Morning circle time with songs and stories",
      "Sensory & exploration activities",
      "Outdoor time (weather permitting)",
      "Lunch & nap time",
      "Afternoon art & music",
      "Snack & free play",
      "Departure",
    ],
    enrichment: [
      { icon: Music, title: "Music & Movement", description: "Daily singing, rhythm instruments, and dance to support auditory development." },
      { icon: Palette, title: "Sensory Art", description: "Safe, age-appropriate art experiences with textures, colors, and shapes." },
      { icon: Leaf, title: "Nature Discovery", description: "Outdoor sensory gardens and nature walks to connect with the world around them." },
    ],
    safety: [
      "Low teacher-to-child ratios exceeding state requirements",
      "Dedicated infant rooms with cribs meeting CPSC safety standards",
      "24/7 security camera monitoring",
      "Secure keypad entry for authorized family members only",
      "All caregivers CPR and First Aid certified",
      "Sanitization protocols followed throughout the day",
    ],
  },
  "preschool": {
    title: "Preschool Program",
    ages: "3 – 4 years",
    badge: "Ages 3 – 4 years",
    image: preschoolImg,
    overview: "Our Preschool program ignites a lifelong love of learning through a creative, play-based curriculum. Children develop critical literacy, math, and social skills through hands-on activities, collaborative projects, and imaginative play. Our teachers create an encouraging environment where curiosity is celebrated and every child is supported in their unique learning journey.",
    curriculum: [
      "Pre-reading skills: letter recognition, phonics, and vocabulary building",
      "Early math concepts: counting, sorting, patterns, and shapes",
      "Science exploration through experiments and nature observation",
      "Social studies and community awareness",
      "Creative expression through art, music, and dramatic play",
      "Physical development through structured and free play",
    ],
    dailyRoutine: [
      "Arrival & morning centers",
      "Circle time with calendar, weather, and stories",
      "Literacy & language arts activities",
      "Outdoor play & gross motor",
      "Lunch",
      "Rest time with quiet activities",
      "Math & science exploration",
      "Art & creative expression",
      "Snack & afternoon play",
      "Departure",
    ],
    enrichment: [
      { icon: Music, title: "Music & Performing Arts", description: "Weekly music classes with singing, instruments, and movement activities." },
      { icon: Palette, title: "Creative Arts", description: "Daily art projects exploring painting, sculpture, collage, and mixed media." },
      { icon: Star, title: "STEM Discovery", description: "Hands-on experiments and building challenges that introduce early STEM concepts." },
    ],
    safety: [
      "State-ratio compliant classrooms with experienced teachers",
      "4K security cameras throughout the facility",
      "Secure check-in/check-out procedures",
      "Regular fire drills and emergency preparedness training",
      "Allergy-aware environment with individualized care plans",
      "Background-checked and trained staff",
    ],
  },
  "pre-kindergarten": {
    title: "Pre-Kindergarten Program",
    ages: "4 – 5 years",
    badge: "Ages 4 – 5 years",
    image: prekImg,
    overview: "Our Pre-K program is designed to prepare children for kindergarten success with confidence and enthusiasm. Through a comprehensive, research-based curriculum, children develop strong academic foundations in reading, writing, and math while building the social-emotional skills needed to thrive in a school setting. We focus on independence, critical thinking, and a genuine love of learning.",
    curriculum: [
      "Reading readiness: sight words, phonemic awareness, and early reading",
      "Writing practice: letter formation, name writing, and journaling",
      "Math foundations: number sense, addition concepts, and measurement",
      "Science investigations and the scientific method",
      "Social-emotional learning and conflict resolution",
      "Technology integration with age-appropriate tools",
    ],
    dailyRoutine: [
      "Arrival & journal writing",
      "Morning meeting & daily news",
      "Literacy block with guided reading",
      "Math workshop",
      "Outdoor play",
      "Lunch",
      "Rest & quiet reading",
      "Science or social studies",
      "Enrichment activities",
      "Snack & afternoon centers",
      "Departure",
    ],
    enrichment: [
      { icon: BookOpen, title: "Reading Club", description: "Small-group guided reading sessions to build confidence and fluency." },
      { icon: Star, title: "STEM Lab", description: "Weekly STEM challenges including coding basics, engineering, and robotics." },
      { icon: Music, title: "Performing Arts", description: "Drama, music, and presentation skills to build confidence and creativity." },
    ],
    safety: [
      "Experienced, certified Pre-K teachers",
      "Comprehensive emergency action plans",
      "Secured facility with visitor management system",
      "Daily health screenings",
      "Anti-bullying curriculum and positive behavior support",
      "Regular parent communication and progress updates",
    ],
  },
  "school-age": {
    title: "School Age / Varsity Club",
    ages: "5 – 12 years",
    badge: "Ages 5 – 12 years",
    image: toddlerImg,
    overview: "Our School Age program, known as the Varsity Club, provides a safe and stimulating environment for children before and after school. We offer homework assistance, engaging enrichment activities, and plenty of time for socialization and physical activity. Our program is designed to complement the school day and support children's academic and personal growth.",
    curriculum: [
      "Dedicated homework help time with teacher support",
      "Reading and literacy enrichment",
      "STEM projects and hands-on experiments",
      "Leadership and teamwork activities",
      "Community service projects",
      "Financial literacy and life skills basics",
    ],
    dailyRoutine: [
      "Morning arrival & breakfast (before school)",
      "Homework assistance",
      "Enrichment activities",
      "Outdoor recreation & sports",
      "Snack time",
      "Free choice activities",
      "Group games & social time",
      "Departure",
    ],
    enrichment: [
      { icon: Star, title: "STEM Challenges", description: "Weekly engineering and science challenges that promote critical thinking." },
      { icon: Palette, title: "Creative Arts", description: "Art projects, crafts, and creative expression activities." },
      { icon: Leaf, title: "Outdoor Adventures", description: "Organized sports, nature exploration, and physical fitness activities." },
    ],
    safety: [
      "Coordinated pick-up and drop-off with local schools",
      "Background-checked staff with youth development training",
      "Secure facility with monitored entry points",
      "Age-appropriate supervision ratios",
      "Emergency contact protocols and communication systems",
      "Anti-bullying policies and positive behavior framework",
    ],
  },
  "summer-camp": {
    title: "Summer Camp Program",
    ages: "All Ages",
    badge: "All Ages Welcome",
    image: preschoolImg,
    overview: "Our Summer Camp is an exciting adventure that keeps children engaged, active, and learning all summer long. Each week features a unique theme with field trips, hands-on projects, water play, creative arts, and outdoor exploration. Children build friendships, develop new skills, and create lasting memories in a fun, supervised environment.",
    curriculum: [
      "Weekly themed units (space, ocean, dinosaurs, world cultures, etc.)",
      "STEM projects and maker activities",
      "Creative writing and storytelling",
      "Nature science and outdoor exploration",
      "Cooking and nutrition workshops",
      "Community helpers and career exploration",
    ],
    dailyRoutine: [
      "Arrival & morning meeting",
      "Theme-based learning activities",
      "Outdoor games & water play",
      "Lunch",
      "Rest & quiet time",
      "Arts & crafts",
      "Field trip or special activity",
      "Snack & free play",
      "Departure",
    ],
    enrichment: [
      { icon: Leaf, title: "Field Trips", description: "Weekly excursions to museums, parks, farms, and community attractions." },
      { icon: Palette, title: "Creative Arts", description: "Painting, sculpture, drama, and mixed-media projects tied to weekly themes." },
      { icon: Music, title: "Performing Arts", description: "Talent shows, skits, and musical performances throughout the summer." },
    ],
    safety: [
      "Trained counselors with low camper-to-staff ratios",
      "Water safety protocols and certified lifeguard supervision",
      "Sunscreen and hydration policies",
      "Field trip safety procedures and headcounts",
      "Indoor/outdoor emergency plans",
      "Allergy-aware snacks and meal planning",
    ],
  },
};

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = slug ? programData[slug] : null;

  if (!program) return <Navigate to="/programs" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge={program.badge}
          title={program.title}
          subtitle={program.overview.slice(0, 120) + "..."}
          image={program.image}
        />

        {/* Overview */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader label="Program Overview" title={program.title} />
              <p className="text-muted-foreground font-body text-lg leading-relaxed text-center max-w-3xl mx-auto -mt-8">
                {program.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader label="Curriculum" title="Learning Approach" subtitle="Our research-based curriculum is designed to engage, challenge, and inspire." />
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {program.curriculum.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <p className="text-foreground font-body">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Routine */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Daily Schedule" title="A Day at Brentwood" subtitle="Every day is thoughtfully structured to balance learning, play, and rest." />
            <div className="max-w-2xl mx-auto">
              {program.dailyRoutine.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 py-4 border-b border-border last:border-0"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-foreground font-body font-semibold">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrichment */}
        <section className="py-20 md:py-28 bg-cream-dark">
          <div className="container mx-auto px-4">
            <SectionHeader label="Beyond the classroom" title="Enrichment Activities" subtitle="Unique experiences that spark curiosity and creativity every day." labelColor="text-secondary" />
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {program.enrichment.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/20 text-accent-foreground flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Your child's safety" title="Safety & Supervision" subtitle="Your child's safety is our top priority. Here's how we protect every child." labelColor="text-secondary" />
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {program.safety.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <p className="text-foreground font-body">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetail;

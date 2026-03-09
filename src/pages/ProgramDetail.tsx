import { motion } from "framer-motion";
import { useParams, Navigate, Link } from "react-router-dom";
import { BookOpen, Shield, Star, Music, Palette, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";
import schoolAgeImg from "@/assets/school-age-program.jpg";
import summerImg from "@/assets/summer-camp.jpg";
import infantClassroom from "@/assets/infant-classroom.jpg";
import preschoolClassroom from "@/assets/preschool-classroom.jpg";
import prekClassroom from "@/assets/prek-classroom.jpg";
import artImg from "@/assets/art-activities.jpg";
import musicImg from "@/assets/music-activities.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import fieldTripImg from "@/assets/field-trip.jpg";
import infantRoomImg from "@/assets/infant-room.jpg";
import toddlerPlayImg from "@/assets/toddler-play.jpg";
import readingImg from "@/assets/reading-time.jpg";

const programData: Record<string, {
  title: string;
  ages: string;
  badge: string;
  image: string;
  galleryImages: { src: string; alt: string }[];
  overview: string;
  overviewExtra: string;
  curriculum: string[];
  enrichment: { icon: React.ElementType; title: string; description: string }[];
  safety: string[];
}> = {
  "infant-toddler": {
    title: "Infant & Toddler Program",
    ages: "6 weeks – 2 years",
    badge: "Ages 6 weeks – 2 years",
    image: toddlerImg,
    galleryImages: [
      { src: infantClassroom, alt: "Infants playing with colorful toys in the classroom" },
      { src: infantRoomImg, alt: "Safe, clean infant sleep room with cozy cribs" },
      { src: toddlerPlayImg, alt: "Toddlers playing with blocks and stacking rings" },
    ],
    overview: "Our Infant & Toddler program provides a warm, secure foundation for your child's earliest and most formative years. With teacher-to-child ratios that exceed Texas state requirements, gentle daily routines, and sensory-rich learning environments, we ensure every baby and toddler feels safe, deeply loved, and naturally curious.",
    overviewExtra: "Our experienced, CPR-certified caregivers focus on building trust through consistency — the same warm faces every day. We communicate with parents daily through reports on feeding, sleeping, diapering, and developmental milestones so you're always connected to your child's day.",
    curriculum: [
      "Sensory exploration stations with age-appropriate, safe materials",
      "Language development through songs, stories, narration, and conversation",
      "Fine and gross motor skill activities tailored to developmental stage",
      "Social-emotional development through guided peer interactions",
      "Early cognitive development with cause-and-effect toys",
      "Tummy time and movement activities for physical growth",
      "Introduction to colors, shapes, and early concepts through play",
      "Music and rhythm activities to support auditory development",
    ],
    enrichment: [
      { icon: Music, title: "Music & Movement", description: "Daily singing, rhythm instruments, and dance to support auditory and motor development." },
      { icon: Palette, title: "Sensory Art", description: "Safe, age-appropriate art experiences with soft textures, bright colors, and shapes." },
      { icon: Leaf, title: "Nature Discovery", description: "Outdoor sensory gardens and supervised nature walks to connect with the world around them." },
    ],
    safety: [
      "Teacher-to-child ratios that exceed Texas state requirements for infants",
      "Dedicated infant rooms with cribs meeting CPSC safety standards",
      "24/7 4K security camera monitoring throughout all areas",
      "Secure keypad entry — only authorized family members may enter",
      "All caregivers CPR, First Aid, and infant-safe sleep certified",
      "Rigorous sanitization protocols followed throughout every day",
      "Daily written reports on feeding, sleeping, and diapering shared with parents",
      "On-site director available at all times during operating hours",
    ],
  },
  "preschool": {
    title: "Preschool Program",
    ages: "3 – 4 years",
    badge: "Ages 3 – 4 years",
    image: preschoolImg,
    galleryImages: [
      { src: preschoolClassroom, alt: "Preschool circle time with teacher reading a book" },
      { src: artImg, alt: "Children painting and doing art projects" },
      { src: readingImg, alt: "Children in the reading nook with their teacher" },
    ],
    overview: "Our Preschool program ignites a lifelong love of learning through a creative, play-based curriculum built on the research-backed Frog Street framework. Children develop critical literacy, math, and social-emotional skills through hands-on activities, collaborative projects, and imaginative play.",
    overviewExtra: "Our teachers create an encouraging, language-rich environment where curiosity is celebrated and every child is supported in their unique learning journey. We believe the best learning happens when children feel safe, valued, and genuinely excited about what they're exploring.",
    curriculum: [
      "Pre-reading skills: letter recognition, phonics, and vocabulary building (Frog Street curriculum)",
      "Early math concepts: counting, sorting, patterns, and basic shapes",
      "Science exploration through experiments, gardening, and nature observation",
      "Social studies and developing community awareness",
      "Creative expression through art, music, movement, and dramatic play",
      "Physical development through structured and imaginative free play",
      "STEAM exposure through building challenges and simple experiments",
      "Social-emotional learning: sharing, turn-taking, and conflict resolution",
    ],
    dailyRoutine: [
      { time: "6:00 AM", activity: "Arrival & morning centers" },
      { time: "8:30 AM", activity: "Circle time with calendar, weather, and stories" },
      { time: "9:15 AM", activity: "Literacy & language arts activities" },
      { time: "10:00 AM", activity: "Outdoor play & gross motor development" },
      { time: "10:45 AM", activity: "Snack time" },
      { time: "11:00 AM", activity: "Math & science exploration" },
      { time: "11:45 AM", activity: "Lunch" },
      { time: "12:30 PM", activity: "Rest time with quiet activities" },
      { time: "2:30 PM", activity: "Art & creative expression" },
      { time: "3:30 PM", activity: "Afternoon snack & play" },
      { time: "6:30 PM", activity: "Departure" },
    ],
    enrichment: [
      { icon: Music, title: "Music & Performing Arts", description: "Weekly music classes with singing, instruments, and movement tied to learning themes." },
      { icon: Palette, title: "Creative Arts", description: "Daily art projects exploring painting, sculpture, collage, and mixed media expression." },
      { icon: Star, title: "STEM Discovery", description: "Hands-on experiments and building challenges that introduce early STEM concepts through play." },
    ],
    safety: [
      "State-compliant classrooms with experienced, background-checked teachers",
      "4K security cameras throughout all indoor and outdoor facility areas",
      "Secure check-in/check-out procedures with photo ID verification",
      "Regular fire drills and comprehensive emergency preparedness planning",
      "Allergy-aware environment with individualized health care plans",
      "Daily health screenings with temperature checks at arrival",
      "All staff CPR and First Aid certified",
      "Anti-bullying curriculum and positive behavior support system",
    ],
  },
  "pre-kindergarten": {
    title: "Pre-Kindergarten Program",
    ages: "4 – 5 years",
    badge: "Ages 4 – 5 years",
    image: prekImg,
    galleryImages: [
      { src: prekClassroom, alt: "Pre-K children at desks working on writing activities" },
      { src: readingImg, alt: "Small group reading with the teacher" },
      { src: musicImg, alt: "Pre-K children in music class" },
    ],
    overview: "Our Pre-K program is designed to give children the confidence, skills, and enthusiasm they need to thrive in kindergarten and beyond. Through a comprehensive, research-based curriculum, children develop strong academic foundations in reading, writing, and math alongside the social-emotional skills needed in a school setting.",
    overviewExtra: "We focus on fostering independence, critical thinking, and a genuine love of learning. Parents regularly tell us that their children enter kindergarten not just prepared — but excited and confident. Our teachers build warm relationships with every family and provide regular progress updates so you're always informed of your child's growth.",
    curriculum: [
      "Reading readiness: sight words, phonemic awareness, and early reading (Frog Street Pre-K)",
      "Writing practice: letter formation, name writing, and beginning journaling",
      "Math foundations: number sense, addition concepts, patterns, and measurement",
      "Science investigations and introduction to the scientific method",
      "Social-emotional learning and constructive conflict resolution",
      "Technology integration with age-appropriate tools and programs",
      "Social studies: community helpers, maps, and cultural awareness",
      "Performing arts: drama, presentations, and speaking confidence",
    ],
    dailyRoutine: [
      { time: "6:00 AM", activity: "Arrival & journal writing" },
      { time: "8:30 AM", activity: "Morning meeting & daily news" },
      { time: "9:00 AM", activity: "Literacy block with guided reading groups" },
      { time: "10:00 AM", activity: "Math workshop & hands-on activities" },
      { time: "10:45 AM", activity: "Outdoor play & physical education" },
      { time: "11:30 AM", activity: "Lunch" },
      { time: "12:15 PM", activity: "Rest & independent quiet reading" },
      { time: "1:30 PM", activity: "Science or social studies exploration" },
      { time: "2:30 PM", activity: "Enrichment activities (STEM, art, music)" },
      { time: "3:30 PM", activity: "Snack & afternoon learning centers" },
      { time: "6:30 PM", activity: "Departure" },
    ],
    enrichment: [
      { icon: BookOpen, title: "Reading Club", description: "Small-group guided reading sessions to build vocabulary, comprehension, and reading confidence." },
      { icon: Star, title: "STEM Lab", description: "Weekly STEM challenges including engineering, basic coding concepts, and hands-on science." },
      { icon: Music, title: "Performing Arts", description: "Drama, music, and public speaking activities to build confidence, creativity, and communication skills." },
    ],
    safety: [
      "Experienced, certified Pre-K teachers with ongoing professional development",
      "Comprehensive emergency action plans and regular lockdown drills",
      "Secured facility with visitor management and sign-in system",
      "Daily health screenings and temperature checks at arrival",
      "Anti-bullying curriculum and consistent positive behavior framework",
      "Daily parent communication via notes, apps, or direct conversation",
      "All staff CPR and First Aid certified",
      "Secure entry — no child released without authorized guardian verification",
    ],
  },
  "school-age": {
    title: "School Age / Varsity Club",
    ages: "5 – 12 years",
    badge: "Ages 5 – 12 years",
    image: schoolAgeImg,
    galleryImages: [
      { src: schoolAgeImg, alt: "School age children doing STEM activities" },
      { src: artImg, alt: "Creative arts activities after school" },
      { src: outdoorImg, alt: "Outdoor recreation and sports" },
    ],
    overview: "Our School Age program — known as the Varsity Club — provides a safe, engaging, and enriching environment for children before and after school. We bridge the school day with meaningful homework help, exciting enrichment, and plenty of time for socialization, play, and physical activity.",
    overviewExtra: "We work collaboratively with local schools to ensure smooth transitions for children. Our caring staff create a supportive environment where kids feel at home while developing leadership skills, creativity, and teamwork. Parents love knowing their school-age children are safe, productive, and thriving while in our care.",
    curriculum: [
      "Dedicated homework help time with teacher support and quiet environment",
      "Reading and literacy enrichment to reinforce school-day learning",
      "STEM projects and hands-on engineering and science challenges",
      "Leadership development and teamwork activities",
      "Community service and social responsibility projects",
      "Financial literacy basics and life skills introduction",
      "Creative writing, storytelling, and public speaking",
      "Health and nutrition awareness programs",
    ],
    dailyRoutine: [
      { time: "6:00 AM", activity: "Morning arrival & breakfast (before school)" },
      { time: "7:00 AM", activity: "Morning enrichment activities" },
      { time: "7:30 AM", activity: "School departure coordination" },
      { time: "3:00 PM", activity: "After-school arrival & snack" },
      { time: "3:30 PM", activity: "Homework help session" },
      { time: "4:30 PM", activity: "Enrichment activities (STEM, arts, cooking)" },
      { time: "5:00 PM", activity: "Outdoor recreation & sports" },
      { time: "5:45 PM", activity: "Free choice & social time" },
      { time: "6:30 PM", activity: "Departure" },
    ],
    enrichment: [
      { icon: Star, title: "STEM Challenges", description: "Weekly engineering and science challenges that promote critical thinking and problem-solving." },
      { icon: Palette, title: "Creative Arts", description: "Art projects, crafts, photography, and creative expression for all interests and skill levels." },
      { icon: Leaf, title: "Outdoor Adventures", description: "Organized sports, nature exploration, fitness activities, and team-building games." },
    ],
    safety: [
      "Coordinated pick-up and drop-off scheduling with partner local schools",
      "Background-checked staff with youth development training",
      "Secure facility with monitored entry points and visitor logs",
      "Age-appropriate supervision ratios at all times",
      "Emergency contact protocols and real-time parent communication",
      "Anti-bullying policies and positive behavior support framework",
      "All staff CPR and First Aid certified",
      "No child released without verified authorized guardian pick-up",
    ],
  },
  "summer-camp": {
    title: "Summer Camp Program",
    ages: "All Ages",
    badge: "All Ages Welcome",
    image: summerImg,
    galleryImages: [
      { src: summerImg, alt: "Children enjoying summer water play" },
      { src: fieldTripImg, alt: "Summer camp field trip to local attraction" },
      { src: artImg, alt: "Arts and crafts tied to summer camp theme week" },
    ],
    overview: "Our Summer Camp is the highlight of the year for Brentwood families! Each week features a unique themed adventure with field trips to local attractions, hands-on STEM projects, water play, creative arts, outdoor exploration, and performing arts showcases. Children build friendships, discover new talents, and create memories that last a lifetime.",
    overviewExtra: "Camp is available for all ages and runs throughout the summer with flexible scheduling options. Early registration is recommended as spots fill quickly. Ask about our sibling discounts and special early-enrollment pricing for returning families.",
    curriculum: [
      "Weekly themed units: space, ocean, dinosaurs, world cultures, superheroes, nature, and more",
      "STEM challenges and maker space activities tied to each week's theme",
      "Creative writing, storytelling, and journaling",
      "Nature science, outdoor exploration, and environmental education",
      "Cooking and healthy nutrition workshops",
      "Community helpers and real-world career exploration",
      "Performing arts: talent shows, skits, and musical performances",
      "Physical fitness and team sports throughout the week",
    ],
    dailyRoutine: [
      { time: "6:00 AM", activity: "Arrival & morning meeting" },
      { time: "8:30 AM", activity: "Theme-based learning & morning activities" },
      { time: "10:00 AM", activity: "Outdoor games & water play" },
      { time: "11:30 AM", activity: "Lunch" },
      { time: "12:15 PM", activity: "Rest & quiet time / reading" },
      { time: "1:30 PM", activity: "Arts & crafts tied to weekly theme" },
      { time: "2:30 PM", activity: "Field trip or special activity day" },
      { time: "3:30 PM", activity: "Snack & free play" },
      { time: "5:00 PM", activity: "Group games & social time" },
      { time: "6:30 PM", activity: "Departure" },
    ],
    enrichment: [
      { icon: Leaf, title: "Field Trips", description: "Weekly excursions to museums, parks, farms, bowling alleys, and Houston area attractions." },
      { icon: Palette, title: "Creative Arts & Drama", description: "Theme-based painting, sculpture, drama performances, and creative expression projects." },
      { icon: Music, title: "Performing Arts Showcase", description: "End-of-summer talent shows, skits, and musical performances for families to enjoy." },
    ],
    safety: [
      "Trained camp counselors with low camper-to-staff ratios",
      "Water safety protocols followed during all water activities",
      "Sunscreen and hydration reminders and policies throughout each day",
      "Field trip safety procedures: headcounts, buddy systems, and staff-to-camper ratios",
      "Indoor/outdoor emergency action plans and regular drills",
      "Allergy-aware snacks, field trip meals, and individualized health plans",
      "All staff CPR and First Aid certified",
      "Parent waivers and emergency contact forms required for all field trips",
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
          subtitle={program.overview.slice(0, 130) + "..."}
          image={program.image}
        />

        {/* Overview */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Program Overview</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-5">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed mb-5">
                    {program.overview}
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {program.overviewExtra}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/schedule-tour"
                      className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold font-body text-sm hover:opacity-90 transition-all shadow-md"
                    >
                      Schedule a Tour
                    </Link>
                    <a
                      href="tel:713-466-9407"
                      className="bg-primary/10 text-primary px-6 py-3 rounded-full font-bold font-body text-sm hover:bg-primary/20 transition-colors"
                    >
                      Call Us: 713-466-9407
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {program.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 h-56" : "h-40"}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Curriculum"
              title="Learning Approach"
              subtitle="Our research-based curriculum — built on the Frog Street framework — is designed to engage, challenge, and inspire children at every developmental stage."
            />
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {program.curriculum.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <p className="text-foreground font-body text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Routine */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Daily Schedule"
              title="A Day at Brentwood"
              subtitle="Every day is thoughtfully structured to balance learning, play, socialization, and rest — giving children the consistency they thrive on."
            />
            <div className="max-w-2xl mx-auto">
              {program.dailyRoutine.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 py-4 border-b border-border last:border-0"
                >
                  <div className="w-20 flex-shrink-0">
                    <span className="text-primary font-body font-bold text-sm">{item.time}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-foreground font-body font-semibold">{item.activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrichment */}
        <section className="py-20 md:py-28 bg-cream-dark">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Beyond the classroom"
              title="Enrichment Activities"
              subtitle="Unique experiences that spark curiosity, creativity, and joy — woven into every single day."
              labelColor="text-secondary"
            />
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
            <SectionHeader
              label="Your child's safety"
              title="Safety & Supervision"
              subtitle="Your child's safety is our most fundamental promise. Here's exactly how we protect every child in our care."
              labelColor="text-secondary"
            />
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {program.safety.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <p className="text-foreground font-body text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={`Ready to Enroll in ${program.title}?`}
          subtitle="Schedule a tour today and see firsthand why Brentwood families trust us with their most precious ones."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetail;

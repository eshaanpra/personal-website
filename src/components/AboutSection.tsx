import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Who I Am</h2>
          <div className="w-16 h-1 bg-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Narrative Widget - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-lg p-8 border border-border"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              The Dual Focus.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Based in The Triangle, NC, I am an AI engineer and competitive tennis player. 
              Attending Crossroads Flex High School allows me to optimize my schedule for maximum output. 
              I utilize this opportunity to simultaneously push my limits on both the automation and athletic sectors.
              As I learn and build real-life projects, my end goals include
              working on the intersection between Machine Learning and Quantum Computing."
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-3">
                {["AI/ML", "Systems Architecture", "AI Integration", "Competitive Tennis"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Card Widget - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

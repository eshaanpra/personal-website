import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Blue Orchid Inc.",
    role: "AI Engineering Intern",
    period: "Nov 2025 – Present",
    highlight: "Sole Developer",
    description:
      "Building full-stack AI products to transform workflows. Prototyping end-to-end features from data pipelines to model integration.",
    tags: ["AI/ML", "Full-Stack", "System Design"],
    size: "large",
  },
  {
    company: "The Wakaboomee Program",
    role: "Lead Grant Writing Intern",
    period: "Jan 2025 – Present",
    description:
      "Strategic leadership. Managed public and private grants to fund youth education programs.",
    tags: ["Leadership", "Strategy"],
    size: "medium",
  },
  {
    company: "Youth Ambassadors of Service",
    role: "Grant Writing Intern",
    period: "Sep 2024 – Apr 2025",
    description:
      "Built relationships with NC grantors and contributed to executive decisions.",
    tags: ["Grant Writing", "Relationship Building"],
    size: "medium",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground">The Rally</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 pl-8 md:pl-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  exp.size === "large" ? "bg-card" : "bg-card/50"
                } rounded-lg p-6 md:p-8 border border-border hover:border-primary/30 transition-colors duration-300`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 md:-left-12 top-8 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {exp.highlight && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-sm">
                        {exp.highlight}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

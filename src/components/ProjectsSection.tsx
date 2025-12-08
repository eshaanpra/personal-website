import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TennisTrackApp",
    category: "Computer Vision",
    description:
      "AI-powered tennis analytics application using computer vision to track ball trajectories, player movements, and match statistics in real-time.",
    tech: ["Python", "OpenCV", "TensorFlow", "React"],
    icon: "tennis" as const,
  },
  {
    title: "Document2Flashcards",
    category: "AI/NLP",
    description:
      "Study tool converting unstructured documents into flashcards using OCR and NLP for intelligent content extraction and learning optimization.",
    tech: ["Python", "PyTorch", "OCR", "NLP"],
    icon: "document" as const,
  },
  {
    title: "Blood Pressure IoT System",
    category: "Systems",
    description:
      "Real-time monitoring system. Ingests wearable data to detect concerning readings and auto-generate alerts for healthcare providers.",
    tech: ["IoT", "Systems Integration", "Python"],
    icon: "pulse" as const,
  },
  {
    title: "The HomeLab",
    category: "Infrastructure",
    description:
      "My personal cloud. Built a custom PC and a TrueNAS SCALE server with 16TB RAID-5 storage to host VMs and deploy code.",
    tech: ["TrueNAS", "Docker", "Hardware", "Networking"],
    icon: "server" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">Architecture & Deployments</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

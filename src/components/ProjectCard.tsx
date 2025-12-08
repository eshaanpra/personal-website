import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Activity, Server, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: "document" | "pulse" | "server" | "tennis";
}

const iconMap = {
  document: FileText,
  pulse: Activity,
  server: Server,
  tennis: Eye,
};

const ProjectCard = ({ title, category, description, tech, icon }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = iconMap[icon];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group bg-card rounded-lg p-6 border border-border overflow-hidden cursor-pointer"
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(24 100% 50% / 0.1), transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="p-3 bg-muted rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
    </motion.div>
  );
};

export default ProjectCard;

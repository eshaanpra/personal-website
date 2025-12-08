import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Role", value: "Intern @ Blue Orchid Inc." },
  { label: "Stack", value: "Python, PyTorch, TrueNAS" },
  { label: "Hardware", value: "16TB RAID-5 Server" },
  { label: "Status", value: "Class of 2028" },
];

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-full min-h-[320px] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 bg-card rounded-lg p-6 mesh-pattern border border-border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-sm font-medium text-primary mb-6 uppercase tracking-wider">
            Quick Stats
          </h3>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start justify-between gap-4"
              >
                <span className="text-muted-foreground text-sm">{stat.label}</span>
                <span className="text-foreground text-sm font-medium text-right">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            Click to flip
          </p>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 bg-card rounded-lg p-6 border border-primary/30 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium text-foreground leading-relaxed">
              "Systems Thinking
              <br />
              <span className="text-primary">applied to everyday life.</span>"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("eshaanprashanth@gmail.com");
    toast({
      title: "Email copied!",
      description: "eshaanprashanth@gmail.com copied to clipboard",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build.</h2>
          <p className="text-muted-foreground text-lg">
            Let's create something exceptional together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/eshaanpra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>github.com/eshaanpra</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/eshaan-prashanth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>linkedin.com/in/eshaan-prashanth</span>
          </motion.a>

          {/* Email */}
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span>Click to copy email</span>
          </motion.button>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="/Eshaan_Prashanth_Resume.pdf"
            download
            className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume .PDF</span>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eshaan Prashanth. All rights reserved.
          </p>

          {/* Tennis Ball Easter Egg */}
          <motion.button
            onClick={scrollToTop}
            className="group relative"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-6 h-6 rounded-full bg-[#ccff00] border border-[#98bf00] shadow-inner relative">
              {/* Tennis ball seam */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ffffff50] transform -translate-y-1/2 rotate-45" />
              </div>
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to top
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

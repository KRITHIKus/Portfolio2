import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const handleDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/RESUME.pdf'; // You would need to add the actual resume file
    link.download = 'Krithik_US_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };
  return <section id="resume" ref={ref} className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My <span className="text-primary">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my resume to explore my experience, skills, and achievements in detail.
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Card className="glass shadow-3xl hover:glow-primary transition-all duration-500 max-w-md w-full">
              <CardContent className="p-8 text-center">
                <motion.div initial={{
                scale: 0
              }} animate={isInView ? {
                scale: 1
              } : {
                scale: 0
              }} transition={{
                delay: 0.3,
                duration: 0.5,
                type: "spring"
              }} className="mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Krithik U S
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Full-Stack Developer & AI Enthusiast
                  <br />
                  Passionate about creating innovative solutions
                </p>

                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button size="lg" onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary group w-full">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>

                <motion.p initial={{
                opacity: 0
              }} animate={isInView ? {
                opacity: 1
              } : {
                opacity: 0
              }} transition={{
                delay: 0.8
              }} className="text-xs text-muted-foreground mt-4">
                  PDF • Last updated: July 2025
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          
        </motion.div>
      </div>
    </section>;
};
export default ResumeSection;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Trophy, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Developed a Farming AI application with Python & Machine Learning",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Built an Admin-Centric Blogging Platform with modern technologies",
    },
    {
      icon: Trophy,
      title: "Problem Solving",
      description: "Solves Data Structures & Algorithms on LeetCode regularly",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Hi, I'm <span className="text-primary font-semibold">Krithik</span>, a passionate 
                full-stack developer with experience in AI-based applications. I love creating 
                innovative solutions that bridge the gap between technology and real-world problems.
              </motion.p>

              {/* Education Card */}
              <motion.div variants={itemVariants}>
                <Card className="glass shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-lg font-medium text-foreground">
                          Bachelor of Computer Applications (BCA)
                        </p>
                        <p className="text-muted-foreground">
                          East Point College of Higher Education
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          2022 - 2025
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass shadow-2xl hover:shadow-3xl transition-all duration-300 hover:glow-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-foreground">
                            {highlight.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
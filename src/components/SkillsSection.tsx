import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Server, 
  Globe, 
  Database, 
  TestTube, 
  Cloud, 
  Brain 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT/Auth", "Middleware"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "hover:bg-primary/20"
    },
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "hover:bg-secondary/20"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB (Mongoose, Aggregation, Indexing)", "Firebase (Auth, Storage)"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverColor: "hover:bg-accent/20"
    },
    {
      icon: TestTube,
      title: "Testing & Tools",
      skills: ["Insomnia", "Postman", "Git & GitHub"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "hover:bg-primary/20"
    },
    {
      icon: Cloud,
      title: "Deployment & DevOps",
      skills: ["Render", "CI/CD basics", "Environment Configs"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "hover:bg-secondary/20"
    },
    {
      icon: Brain,
      title: "Other (Supporting)",
      skills: ["Python", "Flask", "Machine Learning (scikit-learn, model deployment)"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverColor: "hover:bg-accent/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" ref={ref} className="py-20 gradient-section">
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
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My expertise spans across various technologies and tools, enabling me to build robust full-stack applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass shadow-2xl hover:shadow-2xl hover:glow-primary transition-all duration-500 h-full">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-3 ${category.bgColor} ${category.hoverColor} rounded-lg transition-colors duration-300`}
                      >
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.08,
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group/skill"
                        >
                          <div className={`
                            px-3 py-2 rounded-lg text-xs font-medium
                            ${category.bgColor} ${category.hoverColor}
                            border border-border/50
                            backdrop-filter backdrop-blur-sm
                            transition-all duration-300
                            hover:border-border
                            hover:shadow-lg
                            cursor-default
                            relative overflow-hidden
                          `}>
                            {/* Subtle glow effect on hover */}
                            <div className={`
                              absolute inset-0 opacity-0 group-hover/skill:opacity-20 
                              transition-opacity duration-300
                              ${category.color.replace('text-', 'bg-')}
                            `}></div>
                            
                            <span className={`relative z-10 ${category.color} group-hover/skill:text-foreground transition-colors duration-300`}>
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
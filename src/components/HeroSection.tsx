import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MessageCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/developer-hero.jpg";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingTexts = ["I'm a Web Developer", "I build modern websites", "I create full-stack applications", "I love coding & learning new tech"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const socialLinks = [{
    icon: Github,
    href: "https://github.com",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  }, {
    icon: MessageCircle,
    href: "https://reddit.com",
    label: "Reddit"
  }, {
    icon: Trophy,
    href: "https://leetcode.com",
    label: "LeetCode"
  }];
  return <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-0">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Hi,
              <br />
              I'm{" "}
              <span className="text-primary text-primary ">Krithik U S</span>
            </motion.h1>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90">
              <div className="block mb-2 h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span key={currentTextIndex} initial={{
                  y: 20,
                  opacity: 0
                }} animate={{
                  y: 0,
                  opacity: 1
                }} exit={{
                  y: -20,
                  opacity: 0
                }} transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }} className="block">
                    {typingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <motion.div initial={{
              width: 0
            }} animate={{
              width: "100%"
            }} transition={{
              delay: 1,
              duration: 2,
              ease: "easeInOut"
            }} className="h-1 bg-primary rounded-full mx-auto lg:mx-0 max-w-xs" />
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="flex justify-center lg:justify-start space-x-6 mb-8">
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.3
            }} whileHover={{
              scale: 1.2,
              rotateZ: 10
            }} whileTap={{
              scale: 0.9
            }} className="p-3 glass rounded-full hover:glow-primary transition-all duration-300">
                  <social.icon className="w-6 h-6 text-foreground" />
                </motion.a>)}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start my-[10px]">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth"
            })}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            })} className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background glass my-0">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative order-1 lg:order-2 mb-8 lg:mb-0 my-[100px]">
            <motion.div animate={{
            y: [0, -20, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="relative z-10 my-0 mx-[10px]">
              <img src={heroImage} alt="Krithik U S - Developer" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
            <motion.div animate={{
            rotate: -360
          }} transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }} className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
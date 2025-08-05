import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krithikus2004@gmail.com",
      href: "mailto:krithikus2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8618570153",
      href: "tel:+918618570153",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
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
    <section id="contact" ref={ref} className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss how we can work together on amazing projects.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="glass shadow-2xl hover:shadow-3xl hover:glow-primary transition-all duration-500">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300"
                    >
                      <info.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {info.label}
                    </h3>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center glass rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
<a
  href="https://mail.google.com/mail/?view=cm&to=krithikus2004@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.preventDefault();
    const gmailURL = "https://mail.google.com/mail/?view=cm&to=krithikus2004@gmail.com";

    const newWindow = window.open(gmailURL, "_blank", "noopener,noreferrer");

    
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = "mailto:krithikus2004@gmail.com";
    }
  }}
  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary transition duration-300 group"
>
  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
  Send Message
</a>



          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          © 2024 Krithik U S. All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-4/5 h-4/5 relative">
                <Image
                  src="/photos/profile.jpg"
                  alt="Devarapalli Hemanth Sai"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              I'm a <span className="text-primary">B.Tech Graduate</span> specializing in AI and Machine Learning
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a recent B.Tech graduate specializing in Artificial Intelligence and Machine Learning, passionate about solving real-world problems through innovative tech. With a strong foundation in software engineering, AI, and web development, I have participated in national-level research, hackathons, and developed platforms that drive data-driven insights and startup support.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My academic journey has equipped me with theoretical knowledge, while my project experiences have honed my practical skills in AI algorithms, data analysis, and full-stack development. I'm eager to apply my skills in a dynamic environment to make a meaningful impact.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-medium">Devarapalli Hemanth Sai</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Degree</p>
                <p className="font-medium">B.Tech in AI/ML</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium">saireeddy1997@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-medium">Nellore, Andhra Pradesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
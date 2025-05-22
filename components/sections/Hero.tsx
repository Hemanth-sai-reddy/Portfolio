"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <ParticlesBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
          >
            Devarapalli Hemanth Sai
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            <span className="text-primary font-medium">AI Innovator</span> | Full-Stack Enthusiast | Research Contributor
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl text-center mb-10"
          >
            <p className="text-muted-foreground">
              Recent B.Tech graduate specializing in AI/ML, passionate about solving real-world problems with innovative technology.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://drive.google.com/file/d/1rYrEEAsNLjDsajgI_Z7bOOJmpoCAeo-T/view?usp=sharing" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
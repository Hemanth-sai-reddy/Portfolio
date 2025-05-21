"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDUCATION } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey"
        />
        
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Timeline Line */}
          <div 
            className="absolute left-0 md:left-1/2 ml-6 md:ml-0 md:-translate-x-1/2 top-0 h-full w-0.5 bg-border"
            aria-hidden="true"
          />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {EDUCATION.map((item, index) => (
              <div key={item.id} className="relative">
                <motion.div
                  variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={cn(
                    "flex flex-col md:flex-row items-start",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Timeline Icon */}
                  <div 
                    className="absolute left-0 md:left-1/2 ml-6 md:ml-0 md:-translate-x-1/2 flex items-center justify-center z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div 
                    className={cn(
                      "pl-20 md:pl-0 md:w-1/2",
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    )}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {item.institution}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.degree}
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-primary font-medium">
                              {item.duration}
                            </span>
                            <span className="font-medium">
                              {item.grade}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
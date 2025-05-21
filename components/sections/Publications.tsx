"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { PUBLICATIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Publications" 
          subtitle="My research contributions"
        />
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {PUBLICATIONS.map((publication, index) => (
            <motion.div
              key={publication.id}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <publication.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl">{publication.title}</h3>
                      <p className="text-sm text-primary font-medium">{publication.conference}</p>
                      <p className="text-muted-foreground text-sm">{publication.abstract}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-muted/30 flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <a href={publication.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Publication
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
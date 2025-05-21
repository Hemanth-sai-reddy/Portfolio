"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

interface ProjectDetailsProps {
  project: typeof PROJECTS[0];
  onClose: () => void;
}

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="group relative overflow-hidden rounded-xl bg-card cursor-pointer transition-all h-full"
        >
          <div className="relative h-52 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" size="sm">
                View Details
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="mb-2">
                <project.icon className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">{project.description}</p>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </DialogDescription>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="relative h-64 my-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="space-y-4">
          <p>{project.longDescription}</p>
          
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Project
            </Button>
            <Button>
              View GitHub Repository
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
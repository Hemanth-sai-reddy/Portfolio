"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillCard = ({ name, level }: { name: string; level: number }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card p-6 rounded-xl shadow-lg transition-all hover:shadow-xl hover:bg-primary/5"
    >
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="text-3xl font-bold text-primary mb-2">{level}%</div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="bg-primary h-full transition-all duration-1000" 
          style={{ width: `${level}%` }}
        />
      </div>
    </motion.div>
  );
};

const SkillBar = ({ 
  name, 
  level, 
  index 
}: { 
  name: string; 
  level: number; 
  index: number 
}) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress 
        value={level} 
        className="h-2" 
        indicatorClassName="bg-primary transition-all duration-1000" 
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical proficiencies"
        />
        
        <Tabs defaultValue="modern" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="modern">Modern View</TabsTrigger>
            <TabsTrigger value="classic">Classic View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modern">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SKILLS.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="classic">
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                {SKILLS.slice(0, Math.ceil(SKILLS.length / 2)).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="space-y-6">
                {SKILLS.slice(Math.ceil(SKILLS.length / 2)).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index + Math.ceil(SKILLS.length / 2)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
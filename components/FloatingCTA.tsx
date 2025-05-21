"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user has scrolled down 60% of viewport height
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration:
                    0.2 }}
                className="bg-card shadow-lg rounded-lg p-4 mb-4 w-[250px]"
              >
                <div className="text-sm font-medium mb-3">
                  Have a project in mind?
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="w-full"
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            size="icon"
            className={`h-14 w-14 rounded-full shadow-lg ${
              isOpen ? "bg-muted text-muted-foreground" : ""
            }`}
            onClick={toggleOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageSquare className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
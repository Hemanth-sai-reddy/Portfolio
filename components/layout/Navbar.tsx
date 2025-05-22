"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(`#${sectionId}`);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Hemanth</span>Sai
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors block",
                    active === link.href
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <Button
            asChild
            size="sm"
            className="ml-2"
          >
            <a href="https://drive.google.com/file/d/1rYrEEAsNLjDsajgI_Z7bOOJmpoCAeo-T/view?usp=sharing" download>
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="ml-1"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-background shadow-lg py-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col space-y-2 px-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors block",
                      active === link.href
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  asChild
                  className="w-full mt-2"
                  size="sm"
                >
                  <a href="https://drive.google.com/file/d/1rYrEEAsNLjDsajgI_Z7bOOJmpoCAeo-T/view?usp=sharing" download>
                    Download Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
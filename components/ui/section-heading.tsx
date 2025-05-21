import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-2 mb-12", className)}>
      <motion.h2
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={cn("text-muted-foreground max-w-2xl mx-auto", subtitleClassName)}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
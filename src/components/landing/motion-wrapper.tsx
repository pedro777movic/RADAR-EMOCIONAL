"use client";

import { motion, type Variants, type Transition } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: { once: boolean; amount: number };
  transition?: Transition;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function MotionWrapper({
  children,
  className,
  variants = defaultVariants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: "easeInOut" },
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

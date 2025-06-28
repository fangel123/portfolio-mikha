"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

const AnimatedCounter = ({ value, suffix = "" }: AnimatedCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
};

export default AnimatedCounter;

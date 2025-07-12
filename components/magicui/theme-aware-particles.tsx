"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";

interface ThemeAwareParticlesProps {
  className?: string;
  quantity?: number;
  ease?: number;
  size?: number;
  staticity?: number;
  lightColor?: string;
  darkColor?: string;
}

export function ThemeAwareParticles({
  className = "absolute inset-0 -z-10",
  quantity = 50,
  ease = 70,
  size = 0.05,
  staticity = 40,
  lightColor = "#000000",
  darkColor = "#ffffff",
}: ThemeAwareParticlesProps) {
  const { theme, systemTheme } = useTheme();
  const [color, setColor] = useState(darkColor);

  useEffect(() => {
    const effectiveTheme = theme === "system" ? systemTheme : theme;
    setColor(effectiveTheme === "dark" ? darkColor : lightColor);
  }, [theme, systemTheme, lightColor, darkColor]);

  return (
    <Particles
      className={className}
      quantity={quantity}
      ease={ease}
      size={size}
      staticity={staticity}
      color={color}
    />
  );
} 
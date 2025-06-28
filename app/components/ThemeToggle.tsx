"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-md bg-secondary/10 dark:bg-primary/10 h-[2.75rem] w-[2.75rem]"></button>
    );
  }

  return (
    <button
      className="p-2 rounded-md transition-all duration-300 bg-secondary/10 hover:bg-secondary/20 dark:bg-primary/10 dark:hover:bg-primary/20 relative flex items-center justify-center cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.5rem]" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

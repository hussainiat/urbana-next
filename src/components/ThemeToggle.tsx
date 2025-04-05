"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-soft-gray hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-rich-blue dark:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={18} className="text-yellow-300" />
      ) : (
        <Sun size={18} className="text-amber-500" />
      )}
    </button>
  );
}
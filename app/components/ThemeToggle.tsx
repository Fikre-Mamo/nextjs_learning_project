"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          document.documentElement.classList.contains("dark")
            ? "light"
            : "dark"
        )
      }
      aria-label="Toggle theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Sun className="h-5 w-5 dark:hidden" />

      <Moon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
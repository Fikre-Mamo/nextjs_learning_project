import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

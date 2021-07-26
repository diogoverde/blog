import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-full max-w-5xl mx-auto my-0 sticky-nav md:my-8 mt-4 bg-opacity-60 px-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <span className="text-gray-900 sm:p-4 dark:text-gray-200">
              Diogo Verde
            </span>
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-200">Blog</a>
        </Link>
        <Link href="/about">
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-200">About</a>
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

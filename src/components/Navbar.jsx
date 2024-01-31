"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const activeClassNames = "bg-zinc-100";

  return (
    <nav className="px-10 py-3 flex items-center justify-between">
      <div>
        <span className="font-black text-4xl">Next School</span>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/showSchool"
            className={`"text-lg font-medium hover:bg-zinc-100 p-2 rounded-lg text-zinc-700 hover:text-zinc-900" ${
              pathname === "/showSchool" && activeClassNames
            }`}
          >
            Explore Schools
          </Link>
        </li>
        <li>
          <Link
            href="/createSchool"
            className={`"text-lg font-medium hover:bg-zinc-100 p-2 rounded-lg text-zinc-700 hover:text-zinc-900" ${
              pathname === "/createSchool" && activeClassNames
            }`}
          >
            Create School
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

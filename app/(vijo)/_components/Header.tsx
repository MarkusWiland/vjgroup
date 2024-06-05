import Link from "next/link";
import React from "react";

export default function Header({ navLinks }: any) {
    console.log("navLinks", navLinks)
  return (
    <header className="min-h-[70px] flex items-center justify-between">
      <div>logga</div>
      <nav>
        <ul className="flex gap-2">
          {navLinks?.map((link: any) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Button</div>
    </header>
  );
}

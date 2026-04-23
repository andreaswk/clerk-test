"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton, UserButton } from "@clerk/nextjs";

const nav = [
  { href: "/welcome", label: "Welcome" },
  { href: "/protected", label: "Protected" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col justify-between border-r border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="px-2 py-3 text-sm font-semibold tracking-tight">
          Clerk Auth Test
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
        <UserButton />
        <SignOutButton>
          <button className="rounded-md px-3 py-1.5 text-sm text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10">
            Log out
          </button>
        </SignOutButton>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import type { Icon } from "@phosphor-icons/react";
import { House, Lock, Gear, SignOut } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: Icon;
};

const platformNav: NavItem[] = [
  { href: "/welcome", label: "Welcome", icon: House },
  { href: "/protected", label: "Protected", icon: Lock },
];

const accountNav: NavItem[] = [
  { href: "/settings", label: "Settings", icon: Gear },
];

export function Sidebar({
  userName,
  userEmail,
  userImageUrl,
}: {
  userName: string;
  userEmail?: string;
  userImageUrl?: string;
}) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-black/[0.08] bg-[#fafaf7]">
      <SidebarHeader />
      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 py-4">
        <NavGroup label="Platform" items={platformNav} />
        <NavGroup label="Account" items={accountNav} />
      </nav>
      <SidebarFooter
        userName={userName}
        userEmail={userEmail}
        userImageUrl={userImageUrl}
      />
    </aside>
  );
}

function SidebarHeader() {
  return (
    <div className="flex h-14 items-center border-b border-black/[0.08] px-4 text-[#11271f]">
      <MarketerLogo />
    </div>
  );
}

function MarketerLogo() {
  return (
    <svg
      viewBox="0 0 45 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-auto"
      aria-label="Marketer"
    >
      <path
        d="M6.31933 31.9945C9.80939 31.9945 12.6387 29.1626 12.6387 25.6691C12.6387 22.1757 9.80939 19.3438 6.31933 19.3438C2.82926 19.3438 0 22.1757 0 25.6691C0 29.1626 2.82926 31.9945 6.31933 31.9945Z"
        fill="currentColor"
      />
      <path
        d="M27.083 14.7531L33.1495 28.4159C34.4856 31.4521 38.0244 32.8256 41.0216 31.4883C44.0549 30.1509 45.4271 26.6087 44.091 23.6086L33.619 0.0419922L27.0469 14.7892L27.083 14.7531Z"
        fill="currentColor"
      />
      <path
        d="M25.9627 17.247L19.8961 3.58414C18.56 0.54795 15.0212 -0.825565 12.0241 0.511805C8.99078 1.84918 7.61859 5.3914 8.95467 8.39145L19.4267 31.9581L25.9988 17.2109L25.9627 17.247Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NavGroup({ label, items }: { label: string; items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      <p className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-[#4b5563]">
        {label}
      </p>
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex h-8 items-center gap-2.5 rounded-md px-2 text-sm transition-colors",
              active
                ? "bg-[#11271f]/[0.06] text-[#11271f] font-medium"
                : "text-[#11271f]/70 hover:bg-[#11271f]/[0.04] hover:text-[#11271f]"
            )}
          >
            <Icon size={16} weight="regular" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function SidebarFooter({
  userName,
  userEmail,
  userImageUrl,
}: {
  userName: string;
  userEmail?: string;
  userImageUrl?: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-black/[0.08] p-3">
      <div className="flex items-center gap-2.5 rounded-md px-2 py-1.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#11271f]/10">
          {userImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={userImageUrl}
              alt={userName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-xs font-medium text-[#11271f]">
              {userName.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium text-[#11271f]">
            {userName}
          </span>
          {userEmail && (
            <span className="truncate text-xs text-[#4b5563]">
              {userEmail}
            </span>
          )}
        </div>
      </div>
      <SignOutButton>
        <button
          type="button"
          className="flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-black/[0.08] bg-white text-sm font-medium text-[#11271f] transition-colors hover:bg-[#11271f] hover:text-white hover:border-[#11271f]"
        >
          <SignOut size={16} weight="regular" />
          <span>Log out</span>
        </button>
      </SignOutButton>
    </div>
  );
}


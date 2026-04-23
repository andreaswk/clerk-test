import { currentUser } from "@clerk/nextjs/server";
import {
  IdentificationCard,
  CalendarBlank,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

export default async function WelcomePage() {
  const user = await currentUser();
  const name = user?.firstName ?? user?.username ?? "there";
  const email = user?.emailAddresses[0]?.emailAddress;

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title={`Welcome, ${name}`}
        subtitle={email ?? "Signed in to your Marketer workspace"}
      />
      <div className="flex-1 px-8 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<IdentificationCard size={18} weight="regular" />}
            label="User ID"
            value={user?.id ?? "—"}
            mono
          />
          <InfoCard
            icon={<CalendarBlank size={18} weight="regular" />}
            label="Created"
            value={
              user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "—"
            }
          />
          <InfoCard
            icon={<Clock size={18} weight="regular" />}
            label="Last sign-in"
            value={
              user?.lastSignInAt
                ? new Date(user.lastSignInAt).toLocaleString()
                : "—"
            }
          />
        </div>
      </div>
    </div>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex flex-col gap-1 border-b border-black/[0.08] px-8 py-6">
      <h1 className="text-2xl font-semibold tracking-tight text-[#11271f]">
        {title}
      </h1>
      {subtitle && <p className="text-sm text-[#4b5563]">{subtitle}</p>}
    </header>
  );
}

function InfoCard({
  icon,
  label,
  value,
  mono,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-black/[0.08] bg-white p-4">
      <div className="flex items-center gap-2 text-[#4b5563]">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p
        className={`truncate text-sm text-[#11271f] ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

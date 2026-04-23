import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignIn, UserPlus } from "@phosphor-icons/react/dist/ssr";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/welcome");

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 p-8 bg-[#fafaf7]">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#11271f]">
          Clerk auth framework test for Marketer.com
        </h1>
        <p className="mt-4 text-[#4b5563]">
          Pick a path to get started — sign in if you already have an account,
          or create a new one in under a minute.
        </p>
      </header>

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
        <AuthCard
          href="/sign-in"
          title="Sign in"
          description="Welcome back. Pick up where you left off."
          cta="Sign in"
          illustration={<SignIn size={40} weight="duotone" />}
        />
        <AuthCard
          href="/sign-up"
          title="Create account"
          description="New here? Get set up in under a minute."
          cta="Get started"
          illustration={<UserPlus size={40} weight="regular" />}
          featured
        />
      </div>
    </div>
  );
}

type AuthCardProps = {
  href: string;
  title: string;
  description: string;
  cta: string;
  illustration: React.ReactNode;
  featured?: boolean;
};

function AuthCard({
  href,
  title,
  description,
  cta,
  illustration,
  featured,
}: AuthCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(17,39,31,0.25)] ${
        featured
          ? "bg-[#11271f] text-white border-[#11271f]"
          : "bg-white text-[#11271f] border-black/10"
      }`}
    >
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">
        <div
          className={`flex h-full w-full items-center justify-center rounded-xl ${
            featured ? "text-white" : "text-[#11271f]"
          } ${featured ? "bg-white/10" : "bg-[#11271f]/5"}`}
        >
          {illustration}
        </div>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          featured ? "text-white/75" : "text-[#4b5563]"
        }`}
      >
        {description}
      </p>
      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
        {cta}
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}


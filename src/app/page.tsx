import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/welcome");

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8 bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Clerk Auth Test
      </h1>

      <div className="flex gap-3">
        <SignInButton mode="modal">
          <button className="h-10 rounded-full bg-black px-5 text-white dark:bg-white dark:text-black">
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="h-10 rounded-full border border-black/20 px-5 dark:border-white/20">
            Sign up
          </button>
        </SignUpButton>
      </div>
      <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/sign-in" className="underline">
          Hosted sign-in page
        </Link>
        <Link href="/sign-up" className="underline">
          Hosted sign-up page
        </Link>
      </div>
    </div>
  );
}

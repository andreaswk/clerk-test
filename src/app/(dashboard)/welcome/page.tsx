import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomePage() {
  const user = await currentUser();
  const name = user?.firstName ?? user?.username ?? "there";
  const email = user?.emailAddresses[0]?.emailAddress;

  return (
    <main className="flex flex-1 flex-col gap-6 p-10">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-zinc-500">Signed in</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome, {name}
        </h1>
        {email && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{email}</p>
        )}
      </header>

      <section className="grid max-w-2xl gap-3 rounded-lg border border-black/10 bg-white p-5 text-sm dark:border-white/10 dark:bg-zinc-950">
        <Row label="User ID" value={user?.id} />
        <Row label="Created" value={user?.createdAt ? new Date(user.createdAt).toLocaleString() : undefined} />
        <Row label="Last sign-in" value={user?.lastSignInAt ? new Date(user.lastSignInAt).toLocaleString() : undefined} />
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-6">
      <span className="text-zinc-500">{label}</span>
      <code className="text-right">{value ?? "—"}</code>
    </div>
  );
}

import { auth } from "@clerk/nextjs/server";

export default async function ProtectedPage() {
  const { userId } = await auth();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">Protected</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        userId: <code>{userId}</code>
      </p>
    </main>
  );
}

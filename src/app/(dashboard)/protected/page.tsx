import { auth } from "@clerk/nextjs/server";
import { Lock } from "@phosphor-icons/react/dist/ssr";

export default async function ProtectedPage() {
  const { userId } = await auth();

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex flex-col gap-1 border-b border-black/[0.08] px-8 py-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#11271f]">
          Protected
        </h1>
        <p className="text-sm text-[#4b5563]">
          Only signed-in users can see this page.
        </p>
      </header>
      <div className="flex-1 px-8 py-8">
        <div className="flex max-w-xl flex-col gap-3 rounded-xl border border-black/[0.08] bg-white p-6">
          <div className="flex items-center gap-2 text-[#4b5563]">
            <Lock size={16} weight="regular" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Verified session
            </span>
          </div>
          <p className="font-mono text-sm text-[#11271f]">userId: {userId}</p>
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex flex-col gap-1 border-b border-black/[0.08] px-8 py-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#11271f]">
          Settings
        </h1>
        <p className="text-sm text-[#4b5563]">
          Manage your account and workspace preferences.
        </p>
      </header>
      <div className="flex-1 px-8 py-8">
        <p className="text-sm text-[#4b5563]">Nothing here yet.</p>
      </div>
    </div>
  );
}

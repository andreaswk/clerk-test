import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sidebar } from "./_components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const userName =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : user?.firstName ?? user?.username ?? "User";
  const userEmail = user?.emailAddresses[0]?.emailAddress;
  const userImageUrl = user?.imageUrl;

  return (
    <div className="flex min-h-screen flex-1 bg-white">
      <Sidebar
        userName={userName}
        userEmail={userEmail}
        userImageUrl={userImageUrl}
      />
      <main className="flex flex-1 flex-col overflow-x-hidden">{children}</main>
    </div>
  );
}

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <h1 className="text-3xl font-bold">Next.js + NextAuth + GitHub</h1>
      {session ? (
        <div className="flex flex-col items-center gap-4">
          <pre>
            {JSON.stringify(session, null, 2)}
          </pre>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Next.js + NextAuth + GitHub</h1>
      {session ? (
        <div>
          <Link href="/api/auth/signout" className="text-blue-500 underline">Cerrar sesión</Link>
        </div>
      ) : (
        <Link href="/api/auth/signin" className="text-blue-500 underline">Iniciar sesión con GitHub</Link>
      )}
    </main>
  );
}

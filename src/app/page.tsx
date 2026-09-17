import { redirect } from "next/navigation";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/login")
  }
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <h1>hey it's me, it's {session.user.name}!</h1>
    </HydrateClient>
  );
}

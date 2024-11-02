import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./_components/layout/HomePage";
import About from "./_components/layout/About";
import Header from "./_components/layout/Header";
import Schedule from "./_components/layout/Schedule";
import Service from "./_components/layout/Service";

export default async function Home() {
  const event = await api.events.getLatest() ?? undefined;

  return (
    <HydrateClient>
      <main>
        <Header />
        <HomePage />
        <Service />
        <About />
        <Schedule event={event} />
      </main>
    </HydrateClient>
  );
}

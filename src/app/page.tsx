import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./_components/layout/HomePage";
import About from "./_components/layout/About";
import Header from "./_components/layout/Header";
import Schedule from "./_components/layout/Schedule";
import Service from "./_components/layout/Service";
import Conatct from "./_components/layout/Contact";

export default async function Home() {
  const events = await api.events.getAll();

  return (
    <HydrateClient>
      <main>
        <Header />
        <HomePage />
        <Service />
        <About />
        <Schedule events={events} />
        <Conatct />
      </main>
    </HydrateClient>
  );
}

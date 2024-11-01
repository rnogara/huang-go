import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./_components/layout/HomePage";
import About from "./_components/layout/About";
import Header from "./_components/layout/Header";

export default async function Home() {
  const event = await api.events.getLatest();

  return (
    <HydrateClient>
      <main>
        <Header />
        <HomePage />
        <About />
        <section>
          <h1>Agenda</h1>
          {event ? (
            <div>
              <p>{event.type}</p>
              <p>Dia: {event.date}</p>
            </div>
          ) : <p>No momento não há evento previsto</p>}
        </section>
      </main>
    </HydrateClient>
  );
}

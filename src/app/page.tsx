import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/layout/Header";

export default async function Home() {
  const event = await api.events.getLatest();

  return (
    <HydrateClient>
      <main>
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

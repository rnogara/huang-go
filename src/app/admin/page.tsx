import { api, HydrateClient } from "~/trpc/server";

export default async function admin() {
  const events = await api.events.getAll();

  return (
    <HydrateClient>
      <div>
        <h1>Admin</h1>
        <section>
          {events.map((event) => (
            <div key={event.id}>
              <p>{event.name}</p>
              <p>{event.type}</p>
              <p>Dia: {event.date}</p>
              <button onClick={() => api.events.delete({ id: event.id })}>
                Deletar
              </button>
            </div>
          ))}
        </section>
      </div>
    </HydrateClient>
  );
}
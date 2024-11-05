'use client';
import { trpc } from '~/utils/trpc';

export default function EventsList() {
  const { data, error } = trpc.events.getAll.useQuery();

  return (
    <section className="w-[80%] flex flex-col flex-wrap gap-8 border-2 rounded-xl p-8">
      {error && <p>Error loading events: {error.message}</p>}
      {data?.map((event) => (
        <div key={event.id} className="flex gap-5 text-[1.8rem] border-b w-fit">
          <p>{event.local}</p>
          <p>{event.type}</p>
          <p>Dia: {event.date}</p>
          <button>
            X
          </button>
          <button>

          </button>
        </div>
      ))}
    </section>
  );
}
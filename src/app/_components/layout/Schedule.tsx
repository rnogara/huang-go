import Image from "next/image";
import Heading from "../ui/Heading";

type Event = {
  local: string;
  type: string;
  date: string;
}

export default function Schedule({ event }: { event?: Event }) {
  const eventDate = event ? new Date(event.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '';
  const futureEvent = Date.parse(event?.date ?? '') > Date.parse(new Date().toISOString());

  return (
    <section id="schedule" className="h-svh w-full overflow-hidden">
      <div className="relative h-full w-full flex flex-col justify-between">
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <Image
            src="/images/bg-schedule.jpg"
            alt="Imagem de uma floresta de bambu e algumas pedras empilhadas na frente"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="w-full h-fit text-right px-20">
          <Heading className="mb-32">Agenda</Heading>
          <div className="text-[3rem]">
            {futureEvent && event ? (
              <div>
                <p>{event.type}</p>
                <p>{eventDate}</p>
                <p>{event.local}</p>
              </div>
            ) : <div><p>No momento</p><p>não há evento previsto</p></div>}
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
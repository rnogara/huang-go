import Image from "next/image";
import Heading from "../ui/Heading";
import { jost } from "~/app/assets/font";

type Event = {
  local: string;
  types: string[];
  date: string;
}

export default function Schedule({ events }: { events?: Event[] }) {
  const thisMonth = new Date().getMonth();
  const futureEvents = events?.filter((event) => new Date(event.date).getMonth() === thisMonth);

  return (
    <section id="schedule" className="h-svh w-full overflow-hidden">
      <div className="relative h-full w-full flex flex-col justify-between">
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <Image
            src="/images/bg-schedule.jpg"
            alt="Imagem de uma floresta de bambu e algumas pedras empilhadas na frente"
            width={1920}
            height={1080}
            className="object-cover object-left-top md:object-center h-full w-full"
          />
        </div>
        <div className="h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="rounded-xl p-4 ml-auto mr-4 md:ml-0 md:mr-0 mt-10 bg-white/70 w-fit md:bg-transparent md:w-full h-fit md:mt-0 text-right md:px-20 flex flex-col items-end">
          <Heading className="mb-10">Agenda</Heading>
          <div className={`${jost.className} text-nowrap text-[1.8rem] lg:text-[1.95rem] flex flex-col gap-3 w-fit font-bold`}>
            {futureEvents && events ? futureEvents.map((event, idx) =>
              <div key={idx} className="border-b border-black pb-2 w-full first:border-t">
                <p>{new Date(event.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                <p>{event.local}</p>
              </div>) : <div><p>No momento</p><p>não há evento previsto</p></div>}
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
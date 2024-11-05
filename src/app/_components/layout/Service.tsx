import Image from "next/image";
import Heading from "../ui/Heading";

export default function Service() {
  return (
    <section id="service" className="h-fit w-full bg-black">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full h-fit text-center text-white p-10 mb-10">
          <Heading className="my-8">Serviços</Heading>
          <div className="flex justify-evenly items-center w-full h-fit">
            <div className="flex flex-col justify-between gap-5">
              <p className="text-3xl">Aulas</p>
              <p className="text-3xl">Workshops</p>
              <p className="text-3xl">Palestra</p>
              <p className="text-3xl">Apresentação</p>
              <p className="text-3xl">Torneio</p>
              <p className="text-3xl">Exame de Ranking</p>
            </div>
            <Image
              src="/images/board.jpg"
              alt="Tabuleiro de go com pedras pretas e brancas"
              width={1920}
              height={1080}
              className="rounded-2xl h-[30rem] w-fit"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
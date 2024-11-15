import Image from "next/image";
import Heading from "../ui/Heading";

export default function Service() {
  const thisYear = new Date().getFullYear();
  const yearsClasses = thisYear - 2001
  return (
    <section id="service" className="h-fit w-full bg-black">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full h-fit text-center text-white p-10 mb-10">
          <div className="my-10 md:my-8">
            <Heading className="mb-3">Serviços</Heading>
            <p className="text-3xl md:text-[2.3rem]">Há mais de {yearsClasses} anos difundindo o Go pelo Brasil.</p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-evenly items-center w-full h-fit gap-6 mg:gap-0">
            <div className="flex flex-col justify-between gap-5">
              <p className="text-2xl md:text-3xl">Aulas</p>
              <p className="text-2xl md:text-3xl">Workshops</p>
              <p className="text-2xl md:text-3xl">Palestras</p>
              <p className="text-2xl md:text-3xl">Apresentações</p>
              <p className="text-2xl md:text-3xl">Torneios</p>
              <p className="text-2xl md:text-3xl">Exames de Ranking</p>
            </div>
            <Image
              src="/images/board.jpg"
              alt="Tabuleiro de go com pedras pretas e brancas"
              width={1920}
              height={1080}
              className="rounded-2xl h-[15rem] md:h-[27rem] w-fit"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
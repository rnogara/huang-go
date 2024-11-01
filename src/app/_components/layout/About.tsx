import Image from "next/image";
import Heading from "../ui/Heading";
import { about } from "~/app/constants/about";

export default function About() {
  return (
    <section className="h-fit w-full mb-4">
      <div className="relative h-fit w-full">
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src="/images/bg-about.jpg"
            alt="Imagem de uma floresta de bambu e algumas pedras empilhadas na frente"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-24 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="w-[50%] h-fit bg-black/30 rounded-lg ml-6 mt-6 p-10">
          <Heading className="text-white">Sobre</Heading>
          <div className="text-white text-3xl">{about.map((text, idx) => <p key={idx}>{text}</p>)}</div>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-white/90" />
      </div>
    </section>
  );
}
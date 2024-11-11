"use client";
import Image from "next/image";
import Heading from "../ui/Heading";
import { about } from "~/app/constants/about";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";

export default function About() {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <section id="about" className="h-fit w-full">
      <div className="relative h-fit w-full">
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <Image
            src="/images/bg-about.jpg"
            alt="Imagem de uma floresta de bambu e algumas pedras empilhadas na frente"
            width={1920}
            height={1080}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="mx-auto p-5 w-[90%] lg:w-[50%] h-fit bg-black/60 rounded-lg md:ml-8 md:my-7 md:p-10">
          <Heading className="text-white">Sobre</Heading>
          <div className="text-white text-2xl flex flex-col items-start">
            {about.map((text, idx) => <p key={idx} className={cn(
              "line-clamp-6 md:line-clamp-none",
              { "line-clamp-none": readMore },
            )}>{text}</p>)}
            <Button onClick={() => setReadMore(prev => !prev)} variant="link" className="text-white text-2xl md:hidden">
              {readMore ? "Leia menos" : "Leia mais"}
            </Button>
          </div>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="home" className="h-svh w-full">
      <div className="relative h-full w-full">
        <div className="absolute h-full w-full top-0 left-0">
          <Image
            src="/images/bg-home.png"
            width={1920}
            height={1080}
            alt="Imagem do Mt. Fuji breto e branco"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
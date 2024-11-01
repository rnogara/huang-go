import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute h-svh w-full top-0 left-0">
        <Image src="/images/bg-home.png" width={3000} height={800} alt="imagem do Mt. Fuji breto e branco" className="object-fill h-full w-full -z-10" />
      </div>
    </div>
  );
}
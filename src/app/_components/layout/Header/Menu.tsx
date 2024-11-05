import Link from "next/link";
import { Button } from "../../ui/button";

export default function Menu() {
  return (
    <div className="hidden md:block">
      <Button variant="link" asChild className="text-xl lg:text-[1.5rem]"><Link href="#home">Home</Link></Button>
      <Button variant="link" asChild className="text-xl lg:text-[1.5rem]"><Link href="#service">Serviços</Link></Button>
      <Button variant="link" asChild className="text-xl lg:text-[1.5rem]"><Link href="#about">Sobre</Link></Button>
      <Button variant="link" asChild className="text-xl lg:text-[1.5rem]"><Link href="#schedule">Agenda</Link></Button>
      <Button variant="link" asChild className="text-xl lg:text-[1.5rem]"><Link href="#contact">Contato</Link></Button>
    </div>
  );
}
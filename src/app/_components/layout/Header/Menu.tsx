import Link from "next/link";
import { Button } from "../../ui/button";

export default function Menu() {
  return (
    <div>
      <Button variant="link" asChild><Link href="#home" className="text-[1.8rem]">Home</Link></Button>
      <Button variant="link" asChild><Link href="#service" className="text-[1.8rem]">Serviços</Link></Button>
      <Button variant="link" asChild><Link href="#about" className="text-[1.8rem]">Sobre</Link></Button>
      <Button variant="link" asChild><Link href="#schedule" className="text-[1.8rem]">Agenda</Link></Button>
      <Button variant="link" asChild><Link href="#contact" className="text-[1.8rem]">Contato</Link></Button>
    </div>
  );
}
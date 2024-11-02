import Link from "next/link";
import { Button } from "../../ui/button";

export default function Menu() {
  return (
    <div>
      <Button variant="link" asChild><Link href="#home" className="text-xl">Home</Link></Button>
      <Button variant="link" asChild><Link href="#service" className="text-xl">Serviços</Link></Button>
      <Button variant="link" asChild><Link href="#about" className="text-xl">Sobre</Link></Button>
      <Button variant="link" asChild><Link href="#schedule" className="text-xl">Agenda</Link></Button>
      <Button variant="link" asChild><Link href="#contact" className="text-xl">Contato</Link></Button>
    </div>
  );
}
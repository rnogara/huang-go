import Link from "next/link";
import { Button } from "../../ui/button";

export default function Menu() {
  return (
    <div>
      <Button variant="link" asChild><Link className="text-white" href="#home">Home</Link></Button>
      <Button variant="link" asChild><Link className="text-white" href="#about">Sobre</Link></Button>
      <Button variant="link" asChild><Link className="text-white" href="#schedule">Agenda</Link></Button>
      <Button variant="link" asChild><Link className="text-white" href="#contact">Contato</Link></Button>
    </div>
  );
}
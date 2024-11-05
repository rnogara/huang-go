import { Menu } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import Link from "next/link";
import { Button } from "../../ui/button";

export default function MobileMenu() {
  return (
    <Dialog>
      <DialogTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </DialogTrigger>
      <DialogContent className="w-fit bg-black/50 text-white gap-1">
        <DialogHeader>
          <DialogTitle className="text-xl mt-2">Menu</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="link" asChild><Link href="#home" className="text-lg text-white">Home</Link></Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="link" asChild><Link href="#service" className="text-lg text-white">Serviços</Link></Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="link" asChild><Link href="#about" className="text-lg text-white">Sobre</Link></Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="link" asChild><Link href="#schedule" className="text-lg text-white">Agenda</Link></Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="link" asChild><Link href="#contact" className="text-lg text-white">Contato</Link></Button>
        </DialogClose>
      </DialogContent >
    </Dialog >
  );
}
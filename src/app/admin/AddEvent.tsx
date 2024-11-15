'use client';
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "../_components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../_components/ui/calendar";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { jost } from "../assets/font";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { trpc } from '~/utils/trpc';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../_components/ui/dropdown-menu";

const formSchema = z.object({
  local: z.string().min(5, { message: "Por favor, insira uma cidade e estado" })
});

interface FormData {
  local: string;
}

type EventType = "Aula" | "Workshop" | "Palestra" | "Apresentação" | "Torneio" | "Exame de Ranking";

export default function AddEvent() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [types, setTypes] = useState<string[]>([]);
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });
  const create = trpc.events.create.useMutation();

  const handleTypesSelect = (type: string) => {
    if (types.includes(type)) {
      const newTypesArray = types.filter((t) => t !== type)
      setTypes(newTypesArray);
      return;
    }
    setTypes([...types, type]);
  };

  const onSubmit = (data: FormData): void => {
    if (!date || !types) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    try {
      create.mutate({ local: data.local, types: types as EventType[], date: date ? format(date, "yyyy-MM-dd") : "" });
      router.refresh();
      toast.success("Evento adicionado com sucesso!");
    } catch (error) {
      console.error("Failed to send data", error);
      toast.error("Erro ao adicionar evento");
    }
    reset();
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className={`${jost.className} w-fit h-fit text-[2rem] mb-5 p-5 flex gap-3`}>
        <div>
          <Input {...register("local")} type="text" className="bg-transparent text-white text-xl min-w-60" />
          {errors.local && <p className="font-bold text-red-400 text-sm pt-1 pl-1">{errors.local.message}</p>}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent text-xl hover:bg-white hover:text-black rounded-md border border-input" asChild>
            <Button className="w-[280px] justify-start text-left font-normal">Selecione o(s) tipo(s)</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`${jost.className} bg-black text-white`}>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Aula")} className="text-xl">{types.includes("Aula") ? "✔ Aula" : "Aula"}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Workshop")} className="text-xl">{types.includes("Workshop") ? "✔ Workshop" : "Workshop"}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Palestra")} className="text-xl">{types.includes("Palestra") ? "✔ Palestra" : "Palestra"}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Apresentação")} className="text-xl">{types.includes("Apresentação") ? "✔ Apresentação" : "Apresentação"}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Torneio")} className="text-xl">{types.includes("Torneio") ? "✔ Torneio" : "Torneio"}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleTypesSelect("Exame de Ranking")} className="text-xl">{types.includes("Exame de Ranking") ? "✔ Exame de Ranking" : "Exame de Ranking"}</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal bg-transparent text-xl",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "dd/MM/yyyy") : <span>Selecione uma data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className={`${jost.className} w-auto p-0 bg-black text-white`}>
            <Calendar
              className="text-xl"
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button type="submit" variant="outline" className="p-4 ml-4 text-xl bg-transparent">Adicionar</Button>
      </form >
    </div>
  );
}
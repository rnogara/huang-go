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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../_components/ui/select";
import { jost } from "../assets/font";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { trpc } from '~/utils/trpc';

const formSchema = z.object({
  local: z.string().min(5, { message: "Por favor, insira uma cidade e estado" })
});

interface FormData {
  local: string;
}

type EventType = "Aula" | "Workshop" | "Palestra" | "Apresentação" | "Torneio" | "Exame de Ranking";

export default function AddEvent() {
  const [date, setDate] = useState<Date>();
  const [type, setType] = useState<string>("Aula");
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });
  const create = trpc.events.create.useMutation();

  const onSubmit = (data: FormData): void => {
    try {
      create.mutate({ local: data.local, type: type as EventType, date: date ? format(date, "yyyy-MM-dd") : "" });
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
        <Select>
          <SelectTrigger className="bg-transparent text-xl">
            <SelectValue className="w-[280px] justify-start text-left font-normal" placeholder="Selecione um tipo" />
          </SelectTrigger>
          <SelectContent className={`${jost.className} bg-black text-white`}>
            <SelectItem onClick={() => setType("Aula")} className="text-xl" value="Aula">Aula</SelectItem>
            <SelectItem onClick={() => setType("Workshop")} className="text-xl" value="Workshop">Workshop</SelectItem>
            <SelectItem onClick={() => setType("Palestra")} className="text-xl" value="Palestra">Palestra</SelectItem>
            <SelectItem onClick={() => setType("Apresentação")} className="text-xl" value="Apresentação">Apresentação</SelectItem>
            <SelectItem onClick={() => setType("Torneio")} className="text-xl" value="Torneio">Torneio</SelectItem>
            <SelectItem onClick={() => setType("Exame de Ranking")} className="text-xl" value="Exame de Ranking">Exame de Ranking</SelectItem>
          </SelectContent>
        </Select>
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
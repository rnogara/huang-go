import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(3, { message: "Por favor, insira seu nome" }).max(50, { message: "Por favor, use contrações no seu nome" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  message: z.string().min(50, { message: "Mensagem muito curta" }).max(500, { message: "Mensagem muito longa" }),
});

interface FormData {
  firstName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = (data: FormData): void => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-fit w-[80%] m-auto flex flex-col justify-evenly bg-black/80 rounded-2xl p-10 shadow-sm shadow-pink-200 gap-10">
      <h2 className="text-[3rem] text-pink-200 text-center">Entre em contato</h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <Input {...register('firstName')} type="text" placeholder="Nome" className="bg-transparent text-white" />
          <Input {...register('email')} type="email" placeholder="Email" className="bg-transparent text-white" />
        </div>
        <textarea {...register('message')} placeholder="Sua mensagem" className="flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white" />
        <Button type="submit" className="w-[30%] bg-pink-200/40 text-black hover:bg-pink-200/60 mx-auto">Enviar</Button>
      </div>
    </form>
  );
}
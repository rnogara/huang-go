"use client";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { jost } from "~/app/assets/font";


const formSchema = z.object({
  firstName: z.string().min(3, { message: "Por favor, insira seu nome" }).max(50, { message: "Por favor, use contrações no seu nome" }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  message: z.string().min(10, { message: "Mensagem muito curta" }).max(500, { message: "Mensagem muito longa" }),
});

interface FormData {
  firstName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Failed to send data", error);
      toast.error("Erro ao enviar mensagem");
    }
    reset();
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="h-fit w-[90%] sm:w-[70%] xl:w-[40%] flex flex-col justify-evenly bg-black/90 rounded-2xl p-10 shadow-sm shadow-pink-200 gap-10">
        <h2 className="text-3xl text-nowrap md:text-[2.3rem] lg:text-[3rem] text-pink-200 text-center">Entre em contato</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full">
              <Input {...register('firstName')} type="text" placeholder="Nome" className="bg-transparent text-white" />
              {errors.firstName && <p className={`${jost.className} font-bold text-red-400 text-sm pt-1 pl-1`}>{errors.firstName.message}</p>}
            </div>
            <div className="w-full">
              <Input {...register('email')} type="email" placeholder="Email" className="bg-transparent text-white" />
              {errors.email && <p className={`${jost.className} font-bold text-red-400 text-sm pt-1 pl-1`}>{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <textarea {...register('message')} placeholder="Se possível incluir detalhes como o seu nível, frequência de aula desejada, tipo do serviço..." className={`${jost.className} flex h-36 md:h-28 lg:h-20 w-full font-bold rounded-md border border-input bg-transparent px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white`} />
            {errors.message && <p className={`${jost.className} font-bold text-red-400 text-sm pt-1 pl-1`}>{errors.message.message}</p>}
          </div>
          <Button type="submit" className={`${jost.className} w-[50%] lg:w-[30%] bg-pink-200/40 text-black hover:bg-pink-200/60 mx-auto text-xl`}>Enviar</Button>
        </div>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
}
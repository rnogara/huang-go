'use client';
import { z } from "zod";
import { Button } from "../_components/ui/button";
import Heading from "../_components/ui/Heading";
import { Input } from "../_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginVerify } from "~/utils/loginVerify";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email" }),
  password: z.string().min(2, { message: "Por favor, insira uma senha" })
});

interface FormData {
  email: string;
  password: string;
}

export default function Login({ setIsLoginDone }: { setIsLoginDone: (value: boolean) => void }) {
  const router = useRouter();
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormData) => {
    const verify = await loginVerify(data);
    if (verify) {
      setIsLoginDone(true);
      router.refresh();
      return;
    }
    toast.error("Email ou senha incorretos");
    reset();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ToastContainer />
      <Heading className="text-[2.5rem]">Admin Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[30%] flex flex-col gap-4">
        <div>
          <Input {...register("email")} type="email" placeholder="Email" className="bg-transparent" />
          {errors.email && <span className="text-red-400 p-1">{errors.email.message}</span>}
        </div>
        <div>
          <Input {...register("password")} type="password" placeholder="Password" className="bg-transparent" />
          {errors.password && <span className="text-red-400 p-1">{errors.password.message}</span>}
        </div>
        <Button type="submit" className="bg-purple-500 hover:bg-purple-800 w-[50%] m-auto">Login</Button>
      </form>
    </div>
  );
}
'use client';
import { useState } from "react";
import { jost } from "../assets/font";
import AdminPage from "./AdminPage";
import Login from "./Login";

export default function Admin() {
  const [isLoginDone, setIsLoginDone] = useState<boolean>(false);
  return (
    <main className={`${jost.className} bg-black h-svh w-full text-white p-6`}>
      {isLoginDone ? <AdminPage /> : <Login setIsLoginDone={setIsLoginDone} />}
    </main>
  );
}


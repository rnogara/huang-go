'use client';
import EventsList from "./EventsList";
import { jost } from "../assets/font";
import Heading from "../_components/ui/Heading";
import AddEvent from "./AddEvent";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import SuperJSON from 'superjson';
import { trpc } from '~/utils/trpc';

export default function AdminPage() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/trpc` : 'http://localhost:3000/api/trpc',
          transformer: SuperJSON,
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className={`${jost.className} bg-black h-svh w-full text-white p-6`}>
          <Heading className="text-center text-[2.3rem] mb-10">Pagina do Administrador</Heading>
          <AddEvent />
          <EventsList />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

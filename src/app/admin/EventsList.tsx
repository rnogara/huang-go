'use client';
import { trpc } from '~/utils/trpc';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../_components/ui/table';
import { X } from 'lucide-react';
import { format } from "date-fns";
import { Button } from '../_components/ui/button';
import { useRouter } from 'next/navigation';

export default function EventsList() {
  const router = useRouter();
  const { data, error } = trpc.events.getAll.useQuery();
  const deleteEvent = trpc.events.delete.useMutation();

  const handleDelete = (id: number) => {
    deleteEvent.mutate({ id: id });
    router.refresh();
  };

  return (
    <section className="w-[80%] flex flex-col flex-wrap gap-8 border-2 rounded-xl p-8">
      {error && <p>Erro ao carregar eventos</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Local</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Deletar</TableHead>
            {/* <TableHead>Editar</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.local}</TableCell>
              <TableCell>{event.type}</TableCell>
              <TableCell>{format(event.date, "dd/MM/yyyy")}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleDelete(event.id)}>
                  <X />
                </Button>
              </TableCell>
              {/* <TableCell>
                <Button variant="ghost">
                  <Pencil />
                </Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
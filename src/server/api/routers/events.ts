import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { events } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const eventsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(3),
        type: z.enum(["Aula", "Workshop", "Palestra", "Apresentação", "Torneio", "Exame de Ranking"]),
        date: z.string().date()
      }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(events).values({
        name: input.name,
        type: input.type,
        date: input.date,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const event = await ctx.db.query.events.findFirst({
      orderBy: (events, { desc }) => [desc(events.date)],
    });

    return event ?? null;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.events.findMany();
  }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!input) {
        throw new Error("Input is undefined");
      }
      await ctx.db.delete(events).where(eq(events.id, Number(input.id)));
    }),
});

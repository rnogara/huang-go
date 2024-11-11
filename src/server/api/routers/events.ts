import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { events } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const eventsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        local: z.string().min(3),
        type: z.enum(["Aula", "Workshop", "Palestra", "Apresentação", "Torneio", "Exame de Ranking"]),
        date: z.string().date()
      }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(events).values({
        local: input.local,
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
    return ctx.db.query.events.findMany({
      orderBy: (events, { asc }) => [asc(events.date)],
    });
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

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        local: z.string().min(3),
        type: z.enum(["Aula", "Workshop", "Palestra", "Apresentação", "Torneio", "Exame de Ranking"]),
        date: z.string().date()
      }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.update(events).set({
        local: input.local,
        type: input.type,
        date: input.date,
      }).where(eq(events.id, Number(input.id)));
    }),
});

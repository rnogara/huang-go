import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { events } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

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
    const post = await ctx.db.query.events.findFirst({
      orderBy: (events, { desc }) => [desc(events.date)],
    });

    return post ?? null;
  }),
});

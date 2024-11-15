import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { events } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const eventsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        local: z.string().min(3),
        types: z.string().array().min(1).refine((types) => new Set(types).size === types.length),
        date: z.string().date()
      }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(events).values({
        local: input.local,
        types: input.types,
        date: input.date,
      });
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
        types: z.string().array().min(1).refine((types) => new Set(types).size === types.length),
        date: z.string().date()
      }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.update(events).set({
        local: input.local,
        types: input.types,
        date: input.date,
      }).where(eq(events.id, Number(input.id)));
    }),
});

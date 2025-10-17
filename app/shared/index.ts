import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number().int().min(1),
  name: z.string(),
});

export type Todo = z.infer<typeof TodoSchema>;

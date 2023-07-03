import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const menusFormSchema = z.object({
  id: z.string().default(uuidv4()),
  path: z.string().nonempty("O link é obrigatório"),
  name: z.string().nonempty("O nome é obrigatório"),
});

export type TMenusForm = z.infer<typeof menusFormSchema>;

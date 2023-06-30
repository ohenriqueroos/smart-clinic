import { z } from "zod";

export const menusFormSchema = z.object({
  path: z.string().nonempty("O link é obrigatório"),
  name: z.string().nonempty("O nome é obrigatório"),
});

export type TCreateUserForm = z.infer<typeof menusFormSchema>;

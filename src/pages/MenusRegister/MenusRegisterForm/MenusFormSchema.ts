import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const translationPath = "pages.register.menus.errors.";

export const menusFormSchema = z.object({
  id: z.string().default(uuidv4()),
  path: z
    .string()
    .nonempty(translationPath + "menus_link")
    .refine((val) => val.startsWith("/"), translationPath + "menus_link"),
  name: z.string().nonempty(translationPath + "menus_name"),
});

export type TMenusForm = z.infer<typeof menusFormSchema>;

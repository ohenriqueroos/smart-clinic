import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import i18n from "../../../Languages";

const translationPath = "pages.register.menus.errors.";

export const menusFormSchema = z.object({
  id: z.string().default(uuidv4()),
  path: z
    .string()
    .refine(
      (val) => val.startsWith("/"),
      i18n.t(translationPath + "menus_link")
    ),
  name: z.string().nonempty(i18n.t(translationPath + "menus_name")),
});

export type TMenusForm = z.infer<typeof menusFormSchema>;

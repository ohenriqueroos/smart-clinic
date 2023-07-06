import { PASSWORD_VALIDATOR } from "./../../../utils/validators";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const translationPath = "pages.register.users.errors.";

export const userRegisterFormSchema = z.object({
  id: z.string().default(uuidv4()),
  username: z.string().min(4, translationPath + "username"),
  email: z.string().email(translationPath + "email"),
  password: z.string().regex(PASSWORD_VALIDATOR, translationPath + "password"),
});

export type TUserRegisterForm = z.infer<typeof userRegisterFormSchema>;

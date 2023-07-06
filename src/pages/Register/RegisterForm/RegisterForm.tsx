import { Button, Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  TUserRegisterForm,
  userRegisterFormSchema,
} from "./RegisterFormSchema";
import { genericService } from "../../../services/generic.service";

const translationPath = "pages.register.users.";
const USER_ROUTE = "/users";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRegisterForm>({
    resolver: zodResolver(userRegisterFormSchema),
  });

  const saveData = (data: TUserRegisterForm) => {
    genericService.save(data, USER_ROUTE);
  };

  const submitHandler = (data: TUserRegisterForm) => {
    if (data) {
      saveData(data);
      //   navigate(-1);
    }
  };

  const cancelHandler = () => {
    // navigate(-1);
  };

  return (
    <Paper elevation={0} sx={{ marginTop: 4 }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          justifyContent={"flex-start"}
          spacing={4}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              label={t(translationPath + "user_username")}
              size="small"
              type="text"
              autoFocus
              error={errors.username ? true : false}
              {...register("username")}
              helperText={errors ? t(errors?.username?.message || "") : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label={t(translationPath + "user_email")}
              size="small"
              type="email"
              error={errors.email ? true : false}
              {...register("email")}
              helperText={errors ? t(errors?.email?.message || "") : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label={t(translationPath + "user_password")}
              size="small"
              type="password"
              error={errors.password ? true : false}
              {...register("password")}
              helperText={errors ? t(errors?.password?.message || "") : ""}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            position: "absolute",
            bottom: 0,
            marginBottom: 5,
            maxWidth: "50%",
          }}
          spacing={2}
        >
          <Grid item>
            <Button variant="outlined" onClick={cancelHandler}>
              {t(translationPath + "user_cancel_button")}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              {t(translationPath + "user_register_button")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RegisterForm;

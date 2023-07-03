import { Button, Grid, Paper } from "@mui/material";
import { UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useNavigate } from "react-router-dom";
import { TMenusForm } from "../../pages/MenusRegister/MenusRegisterForm/MenusFormSchema";
import { ReactNode } from "react";

interface IFormContainer<T extends object> {
  formSchema: ZodType<T>;
  saveData: (data: any) => void;
  children: (register: UseFormRegister<T>) => ReactNode;
}

const FormContainer = ({
  formSchema,
  saveData,
  children,
}: IFormContainer<any>) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TMenusForm>({
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (data: TMenusForm) => {
    if (data) {
      saveData(data);
      navigate(-1);
    }
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <Paper elevation={0} sx={{ marginTop: 4 }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid
          container
          item
          xs={12}
          sm={8}
          justifyContent={"flex-start"}
          spacing={2}
        >
          {children(register)}
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
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FormContainer;

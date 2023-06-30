import { Button, Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useNavigate } from "react-router-dom";

interface IFormContainer<T extends object> {
  formSchema: ZodType<T>;
  service: any;
  children: any;
}

const FormContainer = <T extends object>({
  formSchema,
  service,
  children,
}: IFormContainer<T>) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (data: T) => {
    if (data) {
      service.save({ ...data, id: Math.random().toString() });
      navigate(-1);
    }
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <Paper elevation={0} sx={{ marginTop: 4, marginRight: 100 }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container justifyContent={"flex-start"} spacing={2}>
          {children}
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

import { Button, Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { menusService } from "../../services/menus.service";
import { v4 as uuidv4 } from "uuid";

// interface IFormContainer<T extends object> {
//   formSchema: ZodType<T>;
//   service: any;
// }

const FormContainer = ({}) => {
  const navigate = useNavigate();

  const menusFormSchema = z.object({
    id: z.string().default(uuidv4()),
    path: z.string().nonempty("O link é obrigatório"),
    name: z.string().nonempty("O nome é obrigatório"),
  });

  type TCreateUserForm = z.infer<typeof menusFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateUserForm>({
    resolver: zodResolver(menusFormSchema),
  });

  const submitHandler = (data: TCreateUserForm) => {
    if (data) {
      menusService.save(data);
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Link"
              size="small"
              type="text"
              autoFocus
              error={errors.path === undefined ? false : true}
              {...register("path")}
              helperText={errors.path?.message || ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              size="small"
              type="text"
              error={errors.name === undefined ? false : true}
              {...register("name")}
              helperText={errors.name?.message || ""}
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

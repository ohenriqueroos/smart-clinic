import RegistersHeader from "../../../components/RegistersHeader/RegistersHeader";
import FormContainer from "../../../components/FormContainer/FormContainer";
import { Box, Grid, TextField } from "@mui/material";
import { menusService } from "../../../services/menus.service";
import { TMenusForm, menusFormSchema } from "./MenusFormSchema";

const MenusRegisterForm = () => {
  const saveData = (data: TMenusForm) => {
    menusService.save(data);
  };

  return (
    <Box>
      <RegistersHeader
        title="Menu"
        subtitle="Tela para cadastro e edição de menu"
      />
      <FormContainer formSchema={menusFormSchema} saveData={saveData}>
        {(register) => (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Link"
                size="small"
                type="text"
                autoFocus
                // error={errors.path === undefined ? false : true}
                {...register("path")}
                // helperText={errors.path?.message || ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                size="small"
                type="text"
                // error={errors.path === undefined ? false : true}
                {...register("name")}
                // helperText={errors.path?.message || ""}
                fullWidth
              />
            </Grid>
          </>
        )}
        {/* {({register}) => (
          <Grid item xs={12} sm={6}>
          <TextField
            label="Link"
            size="small"
            type="text"
            autoFocus
            // error={errors.path === undefined ? false : true}
            {...register("path")}
            // helperText={errors.path?.message || ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            size="small"
            type="text"
            autoFocus
            // error={errors.path === undefined ? false : true}
            {...register("path")}
            // helperText={errors.path?.message || ""}
            fullWidth
          />
        </Grid>
        )} */}
      </FormContainer>
    </Box>
  );
};

export default MenusRegisterForm;

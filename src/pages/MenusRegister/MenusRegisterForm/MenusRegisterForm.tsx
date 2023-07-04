import RegistersHeader from "../../../components/RegistersHeader/RegistersHeader";
import FormContainer from "../../../components/FormContainer/FormContainer";
import { Box, Grid, TextField } from "@mui/material";
import { menusService } from "../../../services/menus.service";
import { TMenusForm, menusFormSchema } from "./MenusFormSchema";
import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";

const translationPath = "pages.register.menus.";

const MenusRegisterForm = () => {
  const { t } = useTranslation();

  const saveData = (data: TMenusForm) => {
    menusService.save(data);
  };

  return (
    <Box>
      <RegistersHeader
        title={t(translationPath + "menu")}
        subtitle={t(translationPath + "menu_subtitle")}
      />
      <FormContainer formSchema={menusFormSchema} saveData={saveData}>
        {(register, errors: FieldErrors<TMenusForm>) => (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t(translationPath + "menus_link")}
                size="small"
                type="text"
                autoFocus
                error={errors.path ? true : false}
                {...register("path")}
                helperText={errors.path?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t(translationPath + "menus_name")}
                size="small"
                type="text"
                error={errors.name ? true : false}
                {...register("name")}
                helperText={errors.name?.message}
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

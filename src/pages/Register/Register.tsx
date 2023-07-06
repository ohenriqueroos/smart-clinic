import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import clinicImage from "../../assets/clinic_image.jpg";
import { useTranslation } from "react-i18next";
import RegisterForm from "./RegisterForm/RegisterForm";

const translationPath = "pages.register.users.";

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        sx={{ position: "relative", top: "20%" }}
      >
        <Grid item sm={6}>
          <Card sx={{ display: "flex", maxWidth: 800, height: 400 }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: 200 }}
              image={clinicImage}
              alt="Live from space album cover"
            />
            <CardContent sx={{ width: "100%", p: 5 }}>
              <Grid container>
                <Grid item sm={12}>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: 700 }}
                  >
                    {t(translationPath + "user_register")}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <RegisterForm />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;

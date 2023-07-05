import { Box, Card, CardMedia, Grid, Stack } from "@mui/material";
import clinicImage from "../../assets/clinic_image.jpg";

const RegisterPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa", width: "100vw", height: "100vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Card sx={{ display: "flex", maxWidth: 600, height: 300 }}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={clinicImage}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;

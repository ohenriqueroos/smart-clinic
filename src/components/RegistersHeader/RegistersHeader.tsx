import { Divider, Grid, Typography } from "@mui/material";

interface IRegistersHeader {
  title: string;
  subtitle: string;
  button: JSX.Element;
}

const RegistersHeader = ({ title, subtitle, button }: IRegistersHeader) => {
  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Grid>
        <Grid item>{button}</Grid>
      </Grid>
      <Divider sx={{ marginTop: 2 }} />
    </>
  );
};

export default RegistersHeader;

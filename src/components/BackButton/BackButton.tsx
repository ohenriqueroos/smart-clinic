import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIosIcon />}
      onClick={backHandler}
    >
      Voltar
    </Button>
  );
};

export default BackButton;

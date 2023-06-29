import { Box } from "@mui/material";

import BackButton from "../../../components/BackButton/BackButton";
import RegistersHeader from "../../../components/RegistersHeader/RegistersHeader";

const MenusRegisterForm = () => {
  return (
    <Box>
      <RegistersHeader
        title="Menu"
        subtitle="Tela para cadastro e edição de menu"
        button={<BackButton />}
      />
    </Box>
  );
};

export default MenusRegisterForm;

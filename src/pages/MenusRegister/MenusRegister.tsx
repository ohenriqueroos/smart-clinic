import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import RegistersHeader from "../../components/RegistersHeader/RegistersHeader";

const MenusRegister = () => {
  return (
    <Box>
      <RegistersHeader
        title="Cadastro de Menus"
        subtitle="Tela para cadastro, edição e exclusão de menusu"
        button={
          <Button variant="contained" startIcon={<AddIcon />}>
            <Link to="/menus-register/new" style={{ color: "#fff" }}>
              Novo Menu
            </Link>
          </Button>
        }
      />
    </Box>
  );
};

export default MenusRegister;

import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import RegistersHeader from "../../components/RegistersHeader/RegistersHeader";
import Table from "../../components/Table/Table";
import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { menusService } from "../../services/menus.service";

const MenusRegister = () => {
  const [menusList, setMenusList] = useState([]);
  const columns: GridColDef[] = [
    { field: "path", headerName: "Link", width: 500 },
    {
      field: "name",
      headerName: "Name",
      width: 500,
    },
  ];

  const loadMenus = useCallback(async () => {
    const data = await menusService.getRoutes();
    if (data) {
      setMenusList(data.data);
    }
  }, []);

  useEffect(() => {
    loadMenus();
  }, []);

  const rows = menusList;

  return (
    <Box>
      <RegistersHeader
        title="Cadastro de Menus"
        subtitle="Tela para cadastro, edição e exclusão de menus"
        button={
          <Button variant="contained" startIcon={<AddIcon />}>
            <Link to="/menus-register/new" style={{ color: "#fff" }}>
              Novo Menu
            </Link>
          </Button>
        }
      />
      <Table columns={columns} rows={rows} />
    </Box>
  );
};

export default MenusRegister;

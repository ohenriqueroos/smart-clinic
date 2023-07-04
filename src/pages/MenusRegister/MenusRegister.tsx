import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import RegistersHeader from "../../components/RegistersHeader/RegistersHeader";
import Table from "../../components/Table/Table";
import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { menusService } from "../../services/menus.service";
import { useTranslation } from "react-i18next";

const translationPath = "pages.register.menus.";

const MenusRegister = () => {
  const [menusList, setMenusList] = useState([]);
  const { t } = useTranslation();

  const columns: GridColDef[] = [
    {
      field: "path",
      headerName: `${t(translationPath + "menus_link")}`,
      width: 500,
    },
    {
      field: "name",
      headerName: `${t(translationPath + "menus_name")}`,
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
  }, [loadMenus]);

  const rows = menusList;

  return (
    <Box>
      <RegistersHeader
        title={t(translationPath + "menus")}
        subtitle={t(translationPath + "menus_subtitle")}
        button={
          <Button variant="contained" startIcon={<AddIcon />}>
            <Link to="/menus-register/new" style={{ color: "#fff" }}>
              {t(translationPath + "menus_new")}
            </Link>
          </Button>
        }
      />
      <Table columns={columns} rows={rows} />
    </Box>
  );
};

export default MenusRegister;

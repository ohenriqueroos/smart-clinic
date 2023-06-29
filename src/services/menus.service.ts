import GlobalAxios from "../axios/axios-config";

const getRoutes = () => {
  return GlobalAxios.get("/menus");
};

export const menusService = {
  getRoutes,
};

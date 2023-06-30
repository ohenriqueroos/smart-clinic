import GlobalAxios from "../axios/axios-config";
import { IMenus } from "../models/menus";

const getRoutes = () => {
  return GlobalAxios.get("/menus");
};

const save = (item: IMenus) => {
  return GlobalAxios.post("/menus", item);
};

export const menusService = {
  getRoutes,
  save,
};

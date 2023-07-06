import GlobalAxios from "../axios/axios-config";

const save = (item: any, route: string) => {
  return GlobalAxios.post(route, item);
};

export const genericService = {
  save,
};

import api from "./api";

export const getAbout = async () => {
  return api("/about");
};
import api from "./api";

export const getServices = async () => {
  return api("/services");
};

export const getServiceById = async (id) => {
  return api(`/services/${id}`);
};
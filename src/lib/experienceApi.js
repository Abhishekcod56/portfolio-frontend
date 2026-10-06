import api from "./api";

export const getExperience = async () => {
  return api("/experience");
};

export const getExperienceById = async (id) => {
  return api(`/experience/${id}`);
};
import api from "./api";

export const getProjects = async () => {
  return api("/projects");
};

export const getProjectById = async (id) => {
  return api(`/projects/${id}`);
};
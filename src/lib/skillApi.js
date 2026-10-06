import api from "./api";

export const getSkills = async () => {
  return api("/skills");
};

export const getSkillById = async (id) => {
  return api(`/skills/${id}`);
};
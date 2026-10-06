import api from "./api";

export const getTestimonials = async () => {
  return api("/testimonials");
};

export const getTestimonialById = async (id) => {
  return api(`/testimonials/${id}`);
};
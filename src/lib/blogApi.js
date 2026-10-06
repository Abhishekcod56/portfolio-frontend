import api from "./api";

export const getBlogs = async () => {
  return api("/blogs");
};

export const getBlogById = async (slug) => {
  return api(`/blogs/slug${slug}`);
};
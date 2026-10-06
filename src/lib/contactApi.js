import api from "./api";

export const sendContactMessage = async (formData) => {
  return api("/contact", {
    method: "POST",
    body: JSON.stringify(formData)
  });
};
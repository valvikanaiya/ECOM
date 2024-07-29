const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const api = {
  allProducrs: `${baseUrl}/products`,
  getProduct: `${baseUrl}/products`,
  addProduct: `${baseUrl}/products`,
  login: `${baseUrl}/auth/login`,
};

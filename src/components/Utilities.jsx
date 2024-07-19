export const BASE_URL = "https://fakestoreapi.com";
import axios from "axios";

export const allowed_Categories = {
  men: "men's clothing",
  women: "women's clothing",
};
export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
export const fetchCategoryProducts = async (categoryName) => {
  const response = await axios.get(
    `${BASE_URL}/products/category/${categoryName}`
  );
  return response.data;
};

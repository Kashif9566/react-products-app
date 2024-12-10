import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products"); //fakeapi to fetch products
  return response.data;
};

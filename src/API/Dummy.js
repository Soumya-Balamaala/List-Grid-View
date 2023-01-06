import axios from "axios";

const baseUrl = "https://dummyjson.com/products";

export const getProducts = async () => {
  const response = await axios.get(baseUrl, {
    header: {
      "Content-type": "application/json",
    },
  });
  return response;
};

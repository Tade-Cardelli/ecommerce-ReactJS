const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategoryId = async (categoryId) => {
  try {
    const response = await fetch(`${API_URL}/category/${categoryId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const getAllCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchProductList = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching product list");
    }
  };
  
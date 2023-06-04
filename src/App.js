import React, { useEffect, useState } from 'react';
import ProductList from './ProductList.js';
import { fetchProductList } from './api.js';
function App() {
  const [productData, setproductData] = useState([]);
  const handleData = async () => {
    const products = await fetchProductList();
    setproductData(products);
    console.log("products",products);
  };

  useEffect(() => {
    handleData();
  }, []);

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event, productId) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        setproductData((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: newQuantity }
              : product
          )
        );
      };
      const calculateTotal = () => {
        let total = 0;
      
        if (Array.isArray(productData)) {
          productData.forEach((product) => {
            const productTotal = product.price * (product.quantity || quantity);
            total = total+productTotal;
          });
        }
      
        return total;
      };

  return (
    <div>
      <ProductList productData={productData}quantity={quantity} handleQuantityChange={handleQuantityChange} calculateTotal={calculateTotal}/>
    </div>
  );
}
export default App;

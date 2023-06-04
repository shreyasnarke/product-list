// import React, { useState, useEffect } from "react";
// import "./ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   useEffect(() => {
//     const fetchProductList = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log(data); // Check the API response format

//         if (Array.isArray(data)) {
//           const updatedProducts = data.map((product) => ({
//             ...product,
//             quantity: quantity, // Add a new 'quantity' property to each product
//           }));
//           setProducts(updatedProducts);
//         } else {
//           console.error("Invalid API response format: Expected an array of products");
//         }
//       } catch (error) {
//         console.error("Error fetching product list:", error);
//       }
//     };

//     fetchProductList();
//   }, [quantity]);
//   const handleQuantityChange = (event, productId) => {
//     const newQuantity = parseInt(event.target.value);
//     setQuantity(newQuantity);
//     const updatedProducts = products.map((product) =>
//       product.id === productId ? { ...product, quantity: newQuantity } : product
//     );
//     setProducts(updatedProducts);
//   };

//   const calculateTotal = () => {
//     let total = 0;

//     if (Array.isArray(products)) {
//       for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         const productTotal = product.price * (product.quantity || quantity);
//         total = total + productTotal;
//       }
//     }

//     return total;
//   };

//   return (
//     <div className="product-table">
//       <h1>Product List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(products) && products.length > 0 ? (
//             <React.Fragment>
//               {products.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.title}</td>
//                   <td>Rs.{product.price}</td>
//                   <td>
//                     <input
//                       type="number"
//                       value={product.quantity || quantity}
//                       onChange={(event) =>
//                         handleQuantityChange(event, product.id)
//                       }
//                     />
//                   </td>
//                   <td>Rs.{product.price * (product.quantity || quantity)}</td>
//                 </tr>
//               ))}
//             </React.Fragment>
//           ) : (
//             <tr>
//               <td colSpan="4">No products found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div className="total-quantity">
//         <span>Total:</span>
//         <span>Rs.{calculateTotal()}</span>
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useState, useEffect } from "react";
import "./ProductList.css";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    fetchProductList();
  }, []);
  
  const fetchProductList = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      console.error("Error fetching product list:", error);
    }
  };
  
  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };
  const calculateTotal = () => {
    let total = 0;
  
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const productTotal = product.price * (product.quantity || quantity);
        total = total+productTotal;
      });
    }
  
    return total;
  };
  return (
    <div className="product-table">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(products) && products.length > 0 ? (
    products.map((product) => (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>Rs.{product.price}</td>
        <td>
          <input
            type="number"
            value={product.quantity || quantity}
            onChange={(event) => handleQuantityChange(event, product.id)}
          />
        </td>
        <td>Rs.{product.price * (product.quantity || quantity)}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No products found</td>
    </tr>
  )}
</tbody>
      </table>
      <div className="total-quantity">
        <span>Total:</span>
        <span>Rs.{calculateTotal()}</span>
      </div>
    </div>
  );
}

export default ProductList;


//---------code for externaly fetch api
// import React, { useState, useEffect } from "react";
// import "./ProductList.css";
// import { fetchProductList } from "./api";
// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
  
//   useEffect(() => {
//     fetchProducts();
//   }, []);
  
//   // const fetchProductList = async () => {
//   //   try {
//   //     const response = await fetch("https://dummyjson.com/products");
//   //     const data = await response.json();
//   //     setProducts(data);
//   //   } catch (error) {
//   //     console.error(error);
//   //     console.error("Error fetching product list:", error);
//   //   }
//   // };
//   const fetchProducts = async () => {
//     try {
//       const data = await fetchProductList();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching product list:", error);
//     }
//   };

//   const handleQuantityChange = (event, productId) => {
//     const newQuantity = parseInt(event.target.value);
//     setQuantity(newQuantity);
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === productId
//           ? { ...product, quantity: newQuantity }
//           : product
//       )
//     );
//   };
//   const calculateTotal = () => {
//     let total = 0;
  
//     if (Array.isArray(products)) {
//       products.forEach((product) => {
//         const productTotal = product.price * (product.quantity || quantity);
//         total = total+productTotal;
//       });
//     }
  
//     return total;
//   };
//   return (
//     <div className="product-table">
//       <h1>Product List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//   {Array.isArray(products) && products.length > 0 ? (
//     products.map((product) => (
//       <tr key={product.id}>
//         <td>{product.title}</td>
//         <td>Rs.{product.price}</td>
//         <td>
//           <input
//             type="number"
//             value={product.quantity || quantity}
//             onChange={(event) => handleQuantityChange(event, product.id)}
//           />
//         </td>
//         <td>Rs.{product.price * (product.quantity || quantity)}</td>
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td colSpan="4">No products found</td>
//     </tr>
//   )}
// </tbody>
//       </table>
//       <div className="total-quantity">
//         <span>Total:</span>
//         <span>Rs.{calculateTotal()}</span>
//       </div>
//     </div>
//   );
// }

// export default ProductList;
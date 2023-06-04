# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

const fetchProductList = async () => {
    try {
      const response = await fetch(`'https://dummyjson.com/products'`);
      const textResponse = await response.text();

      if (!response.ok) {
        throw new Error('Error fetching product list');
      }

      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (error) {
        throw new Error('Invalid response format');
      }

      setProducts(data);
    } catch (error) {
      console.error(error);
      // Handle the error state or display an error message to the user
    }
  };
  
/* .product-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .product-table th,
  .product-table td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  .total-quantity {
    font-weight: bold;
  }
   */


//import React, { useEffect, useState } from 'react';
// import './ProductList.css';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProductList();
//   }, []);

//   useEffect(() => {
//     const calculateTotalQuantityAndPrice = () => {
//         let totalQuantity = 0;
//         let totalPrice = 0;
    
//         if (Array.isArray(products)) {
//           products.forEach((product) => {
//             totalQuantity += product.quantity;
//             totalPrice += product.quantity * product.price;
//           });
//         }
    
//         setTotalQuantity(totalQuantity);
//         setTotalPrice(totalPrice);
//       };
//     calculateTotalQuantityAndPrice();
//   }, [products]);

//   const fetchProductList = async () => {
//     try {
//       const response = await fetch(`'https://dummyjson.com/products'`);
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);  
//     } catch (error) {
//       console.error('Error fetching product list:', error);
//       setLoading(false);  
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(products) ? (
//             products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.title}</td>
//                 <td>Rs.{product.price}</td>
//                 <td>{product.quantity}</td>
//                 <td>Rs.{product.quantity * product.price}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No products found</td>
//             </tr>
//           )}
//         </tbody>
//         {Array.isArray(products) && (
//           <tfoot>
//             <tr>
//               <td colSpan="3">Total:</td>
//               <td>Rs.{totalPrice}</td>
//             </tr>
//           </tfoot>
//         )}
//       </table>
//       <p className="total-quantity">Total Quantity: {totalQuantity}</p>
//     </div>
//   );
// }

// export default ProductList;# product-list

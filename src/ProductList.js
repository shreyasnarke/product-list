function ProductList(props){
  const {productData,quantity,handleQuantityChange,calculateTotal}=props;
  
  return(
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
       {Array.isArray(productData) && productData.length > 0 ? (
         productData?.map((product) => (
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
           <td colSpan="4">No productData found</td>
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
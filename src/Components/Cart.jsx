import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromcart,applyTempUpdate,updateTempQuantity } from '../features/ShoppingCart/cartSlice';
const Cart = () => {
  const {items:cartItems,tempItems,totalPrice}=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const handleRemoveItem=(id)=>{
    dispatch( removeFromcart(id));
  }
  useSelector (state=>console.log(state));

 const  handleUpdateQuantity=(id,quantity)=>{
  dispatch(updateTempQuantity({id,quantity}))
 }
 const handleApplyUpdate=()=>{
  tempItems.forEach((item)=>{
  dispatch(applyTempUpdate(item.id))
  })
 }
  return (
   <div className="wrapper">
      <div className="cart-page-container">
        { cartItems.length==0?(
          <div className="cart-empty">
         <h3> Your cart is Empty</h3>
         <Link   className='back-button'to="/">Back to Home</Link>
          </div>
        ):
      (<div className="cart-container">
        <h2> Your Cart</h2>
        {cartItems.map((item)=>(
           <div className="cart-item" key={item.id}>
          <img src={item.thumbnail} alt={item.title}/>
           <div className="cart-item-details">
           <h3> {item.title} </h3>
           <p> Price : ${item.price}</p>
           <div>
            <input type='number' min="1"
            value={tempItems.find((tempItem)=>tempItem.id===item.id)?.quantity || item.quantity}
            onChange={(e)=>handleUpdateQuantity(item.id,parseInt(e.target.value))}
            />
            <button onClick={handleApplyUpdate}>Update</button>
            <button onClick={( )=>handleRemoveItem(item.id)}>Remove</button>
            </div>
           </div>
        </div>
        ))}
        <div className="cart-total">
          <p>Total:{totalPrice}</p>

          <div >
            <Link  className='back-button' to="/"> Back To Shopping </Link>
          </div>
       
        {/* <button className='back-button'><Link to="/">Back to shooping </Link></button> */}
        </div>
      </div>)}
    </div>
  </div>
  )
}
export default Cart
import React from 'react'
import Navbar from './Navbar'
import {useDispatch, useSelector}  from 'react-redux'
import { useEffect, } from 'react'
import { fetchProducts } from '../features/ShoppingCart/productSlice';
import { addToCart } from '../features/ShoppingCart/cartSlice';
import {setSearchQuery} from '../features/ShoppingCart/searchSlice';
function ProductList  () {
const dispatch=useDispatch(); // Dispatch method ka use action dene kke liye hota hai api mai
   
  // Setting and displaying the data.
  // const [products,setproducts]=useState([]);
  // now we will not be using products here as we're using redux toolkit management 
  const {items:products,status}=useSelector((state)=>(state.products));
  
const searchQuery=useSelector((state)=>state.search);

  // fetching data through given api  by using UseEffect method
  useEffect(()=>{

    if(status=='idle'){
     dispatch(fetchProducts())
    }



  // const fetchProducts=async()=>{
    // const response= await fetch('https://dummyjson.com/products')
    // const data =await response.json();
    // console.log(data);
    // setproducts(data.products); now we don't need this react fetch api method we've already use that in redux toolkit
  // }
  // fetchProducts();
},[status])

const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
if(status==='loading') return <p>Loading......</p>
if(status=='failed') return <p> Error.........</p>
  return (
    <div>
      <>
      <Navbar/>
  
   <div style={{ textAlign: 'center', margin: '20px' }}>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          style={{ padding: '10px', width: '300px' }}
        />
      </div>




      <div className="product-list">
        {filteredProducts .map(product=>(
        <div className="product-card" key={product.id}>
        <img src={product.thumbnail} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>Price : ${product.price}</p>
        <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
        {/* // onclick action is use so  that product array quantity should displaying on the cart page and
        // tempItems will be  increase also total price products.price will increment according to that */}
        </div>
        ))}
        
      </div>
      </>
    </div>
  )
}

export default ProductList
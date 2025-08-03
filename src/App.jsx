import React from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/nav' element={<Navbar/>} />
      </Routes>
     </Router>
    </div>
  )
}
export default App
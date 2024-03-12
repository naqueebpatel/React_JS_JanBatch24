import React, { useContext } from 'react'
import Children from './Children'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';


const Parent = () => {

// const data=useContext(AuthContext)

const {isAuth}=useContext(AuthContext);
const{toggleTheme}=useContext(ThemeContext);

  return (
    <>
    <h1>Parent</h1>
    {/* <h6>{data.value ? "AUTHORIZED" :"NOT AUTHORIZED"}</h6> */}
    <h4>{isAuth?"AUTHORIZED":"NOT AUTHORIZED"}</h4>
    <button onClick={toggleTheme}>TOGGLE THEME</button>
    <Children />
    </>
  )
}

export default Parent


// const CartProvider=()=>{

//   const [cartData,setCartData]=useState([])

//   const addToCart=(value)=>{
//      setCartData({...cartData,value})
//   }

//   VALUE={  cartData,addtoCrt }

//   return ()
// }

// <PRODUCTS>

// data.map((elem)=>{
  
//   <button onClick={()=>{
//     addToCart(elem)
//   }}>ADD TO CART</button>


// })


// </PRODUCTS>

// cart

// {cartData}=CartProvider
// cartData.map((elem)=>{


// })
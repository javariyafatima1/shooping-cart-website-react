import React from 'react';
import Navbar from './Header';
import Navbarr from './Header';
import Baner from './Baner';
import { CartContext } from '../context/Context';
import Product from './Product';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';




const Dashbord = () => {
  
  const  {state:{products},} = CartContext();
  console.log(products)
  const location = useLocation();
  const { username } = location.state || {};
 return (
  <div>
   <h1> Welcome: {username}</h1>
      <Baner />
      <div className='product'>
       <div className='productcanta'>
       {
        products.map((item)=>{
         return <Product item={item} key={item.id} />
        })
      }
       </div>
      </div>
     <Footer/>
    </div>
  );
}
export default Dashbord;


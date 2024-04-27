import React from 'react';
import Navbar from './Header';
import Navbarr from './Header';
import Baner from './Baner';
import { CartContext } from '../context/Context';
import Product from './Product';
import Footer from './Footer';




const Home = () => {
  const  {state:{products}} = CartContext();
  console.log(products)
  return (
    <div>
      <Baner />
      <div className='product'>
       <div className='productcanta'>
       {
        products.map((item)=>{
         return   <Product item={item} key={item.id}/>
        })
      }
       </div>
      </div>
     

     
     <Footer/>
    </div>
  );
}

export default Home;

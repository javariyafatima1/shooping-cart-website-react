import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/Context';
import { Button, Toast, } from 'react-bootstrap';

const Card = ({item}) => {
  const {
    state: { cart },
    dispatch,
  } = CartContext();

 const [total, setTotal] = useState();
  useEffect(() =>{
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
    
   <h1 style={{marginLeft:80,marginTop:30}}>Card Items</h1>
         
       {
        cart.map(item => (
          <Toast style={{marginLeft:500,marginTop:30}}>
      <Toast.Header>
        <img src={item.image} style={{width:50,height:50}} className="rounded me-2 " alt="" />
        <strong className="me-auto">{item.title}</strong>
        <small>Rating:{item.rating.rate}</small>
      </Toast.Header>
      <Toast.Body>Price:{item.price}</Toast.Body>
    </Toast>
         
        
         
        ))}
       

    
    <div>
    <h2 style={{marginLeft:80,marginTop:30}}> Totalitem:  {cart.length}</h2>  
    <h2 style={{marginLeft:80,}}> Total Amount:{total} </h2>  
    <Button style={{marginLeft:80,marginTop:10}}>
      Check out
    </Button>
    </div>
    </>
  );
}

export default Card;

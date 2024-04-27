import React from 'react';

import {Button, Card,ListGroup} from 'react-bootstrap';
import { CartContext } from '../context/Context';

const Product = ({item}) => {
  const {state: { cart },dispatch,} = CartContext();

  
  return (
   <div className='flex'>
    <Card style={{height:360,marginTop:30,width:350,marginLeft:10,}}>
      <Card.Img variant='top'style={{height:100,marginTop:10,width:150,marginLeft:100}} src={item.image}/>
      <Card.Body>
      
        <Card.Subtitle>
        <ListGroup>
        <ListGroup.Item> <h5>Title:{item.title}</h5></ListGroup.Item>
      <ListGroup.Item> <h5>Price:{item.price}</h5></ListGroup.Item>
      <ListGroup.Item> 
         <h5>Rating:{item.rating.rate}</h5></ListGroup.Item>
     
         <ListGroup.Item> 
        {cart.some((p) => p.id === item.id) ? (
            <Button 
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
             
            >
              {"Add to Cart"}
            </Button>
          )}
          </ListGroup.Item>
          </ListGroup>
       
       </Card.Subtitle>
      </Card.Body>
    </Card>
        
      
      
    </div>
  );
}

export default Product;

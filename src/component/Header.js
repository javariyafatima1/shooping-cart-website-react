import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';
const Header = ({item}) => {
   const {state:{cart},} = CartContext();
  
   return (
    <Navbar  data-bs-theme="dark" id="n">
        <Container>
          <Navbar.Brand href="">Ecommerse</Navbar.Brand>
          <Nav className="me-auto pt-3 mx-5 fs-5 ">
            <Nav.Link className=" text-white"href="/">Home</Nav.Link>
            <Nav.Link  className=" text-white"href="/about"> About</Nav.Link>
          
            <Nav.Link className=" text-white"href="/singup">singup</Nav.Link>
            <Nav.Link className=" text-white" href="/login">login</Nav.Link>
            <Nav.Link className=" text-white"href="/card">Card</Nav.Link>
            
         
       
            <input className="serchinput" type="text"  placeholder=" Search Ads Cars, mobile phone and More...."/>
            <div className="search-line">

        
         <FiSearch/>
            </div>
            <div className='drop'>
            <Dropdown as={ButtonGroup}>
      <Button variant="light" > <Nav.Link  className=" text-dark" href="/card" >   <FontAwesomeIcon icon={faShoppingCart} />{cart.length}
      
      
      </Nav.Link></Button>

      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

      <Dropdown.Menu >
       {cart.length > 0 ?(
        <>
       {
        cart.map(item =>(
          <div className='side'>
           <img src={item.image}/>
            </div>
        ))}
        <Link to="/card">
            <Button>
              Show card
            </Button>
        </Link>
        </>
       ):
       (
        <span>cart is empty</span>
       )
      }
        
      </Dropdown.Menu>
    </Dropdown>
    </div>
            </Nav>
        </Container>
       
      </Navbar>
    
  );
}

export default Header;

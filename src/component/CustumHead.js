import React from 'react';
import Headerd from './Headerdash';
import Header from './Header';
import { useLocation } from 'react-router-dom';
const CustomHeader = () => {


const location = useLocation();
const currentRoute = location.pathname;

if (currentRoute === "/dashboard") {
    return <Headerd />;}
    else {
    return <Header />;
}    
}

export default CustomHeader;

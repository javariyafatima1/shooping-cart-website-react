import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Baner = () => {
  return (
    <div className='ban'>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="  mx-5 "
          src="https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-5  "
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/815/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" mx-5"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/707/506/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Baner;

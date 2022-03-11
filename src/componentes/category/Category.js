import React from "react";
import Slider from "react-slick";
//import './Category.css';



export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className="container">
    
    <Slider {...settings}>

      <div className="row justify-content-center">
        <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-1.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
        <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-2.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-3.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-4.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-5.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-6.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-7.png" alt="..." className="img-circle"/>
        </a>
      </div>
      <div className="row justify-content-center">
      <a href="#">
        <img src="https://www.artntech.com.co/images-osv/icon-8.png" alt="..." className="img-circle"/>
        </a>
      </div>
    
    </Slider>
    </div>
  );
}
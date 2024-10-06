import React, { useRef } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Slider from "react-slick";

import iphone from "../../../img/banner-images/iphone-16.png";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
};

function ViewAllProducts()
{
    return (
        <BrowserRouter>
            <nav>
                <button type="button" name="viewAll" id="viewAll">
                    <Link to="/products">View All Products</Link>
                </button>  
            </nav>
        </BrowserRouter>
    )
}

function FlashSaleProductItems()
{
    const productItems = [];

    for(let i = 0; i<5; i++)
    {
        productItems.push(<div key={i} className="p-2">
            {
                <img src={iphone}></img>
            }
        </div>)
    }

    return (
        <div className='slider-container w-full'>
            <Slider {...settings}>
                {
                    productItems
                }
            </Slider>

            <div className="text-center">
                <ViewAllProducts/>
            </div>
        </div>
    )
}

export default FlashSaleProductItems
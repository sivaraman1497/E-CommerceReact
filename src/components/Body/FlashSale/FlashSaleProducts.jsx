import React, { useRef, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Slider from "react-slick";

import iphone from "../../../img/banner-images/iphone-16.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

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
                <button type="button" name="viewAll" id="viewAll" className="viewAllProducsBtn bg-red-500 text-white p-4 rounded-lg">
                    <Link to="/products">View All Products</Link>
                </button>  
            </nav>
        </BrowserRouter>
    )
}

function FlashSaleProductItems()
{
    function changeColorMouseEnter(e)
    {
        let currentElement = e.target;
        currentElement.setAttribute('fill', 'red');
    }

    function changeColorMouseLeave(e)
    {
        let currentElement = e.target;
        currentElement.setAttribute('fill', 'white');
    }

    const productItems = [];

    for(let i = 0; i<5; i++)
    {
        productItems.push(
            <div key={i} className="p-2">
                {
                    <div className="relative">
                        <img className="product-image" src={iphone}/>

                        <a className="addToCartLink absolute top-2 right-3 cursor-pointer" onClick={() =>{
                            console.log(i);
                        }}>
                            <CiHeart className="addToCartIcon text-[#ffffff] text-[25px]" onMouseEnter={changeColorMouseEnter} onMouseLeave={changeColorMouseLeave} />
                        </a>

                        <a className="wishlistLink absolute top-10 right-3 cursor-pointer" onClick={() =>{
                            console.log(i);
                        }}>
                            <CiShoppingCart className="wishlistIcon text-[#ffffff] text-[25px]" onMouseEnter={changeColorMouseEnter} onMouseLeave={changeColorMouseLeave}/>
                        </a>

                    </div>
                }
            </div>
        )
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
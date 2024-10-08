import React, { useRef, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Slider from "react-slick";

import iphone from "../../../img/banner-images/iphone-16.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

import {
    Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton
  } from "@material-tailwind/react";

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
            <div key={i} className="p-2 w-72">
                {
                   <Card className="w-100 grid">
                   <CardHeader shadow={false} floated={false} className="h-96 overflow-visible">
                     <img
                       src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                       alt="card-image"
                       className="h-full w-full object-cover"
                     />

                    <CiHeart className="addToCartIcon text-[#ffffff] text-[25px] relative bottom-10 left-2" onMouseEnter={changeColorMouseEnter} onMouseLeave={changeColorMouseLeave} />

                   </CardHeader>
                   <CardBody>
                     <div className="mb-2">
                       <Typography color="blue-gray" className="font-medium">
                         Apple AirPods
                       </Typography>
                       <Typography color="blue-gray" className="font-medium">
                         $95.00
                       </Typography>
                     </div>
                   </CardBody>
                   <CardFooter className="pt-0">
                     <Button
                       ripple={false}
                       fullWidth={true}
                       className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                       Add to Cart
                     </Button>
                   </CardFooter>
                 </Card>
                }
            </div>
        )
    }

    return (
        <div className='slider-container w-[98%]'>
            <Slider {...settings}>
                {
                    productItems   
                }
            </Slider>

            <div className="text-center p-5">
                <ViewAllProducts/>
            </div>
        </div>
    )
}

export default FlashSaleProductItems
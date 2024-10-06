import iphone from "../../img/banner-images/iphone-16.png";
import kitchen_appliance from "../../img/banner-images/kitchen-appliance.jpeg";
import laptop from "../../img/banner-images/laptop.jpeg";
import skincare from "../../img/banner-images/skincare.jpeg";
import women_fashion from "../../img/banner-images/women-fashion.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"

let i = 0;

function BannerImages()
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false
      };

    const images = [
        iphone, 
        iphone,
        iphone,
        iphone, 
        iphone
    ];

    return (
        <Slider {...settings}>
            {
                images.map((image, index) => {
                    return (
                        <div key={index} className="bannerImage-container">
                            <img key={index} className="bannerImage" src={image}/>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default BannerImages;

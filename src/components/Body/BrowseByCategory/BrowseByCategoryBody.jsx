import {
    Card,
    CardHeader,
    CardFooter,
    Button
  } from "@material-tailwind/react";
  
  import Slider from "react-slick";

  import { MdOutlinePhoneIphone, MdCameraAlt, MdSpeaker, MdComputer, MdOutlineDesktopWindows, MdHeadphones, MdSportsEsports, MdLaptopMac, MdSportsMotorsports} from "react-icons/md";
  

  export function BrowseByCategoryBody() 
  {

        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
        };

        const RenderIconComponent = ({IconName}) =>
        {
            return (
                <IconName className="browseByCategoryIcons justify-center"/>
            )
        }

        const productItems = [
            {icon: MdOutlinePhoneIphone, label: 'Mobile'},
            {icon: MdCameraAlt, label: 'Camera'},
            {icon: MdSpeaker, label: 'Speakers'},
            {icon: MdComputer, label: 'Computer'},
            {icon: MdOutlineDesktopWindows, label: 'TV'},
            {icon: MdHeadphones, label: 'Headphones'},
            {icon: MdSportsEsports, label: 'Sports'},
            {icon: MdLaptopMac, label: 'Laptop'},
            {icon: MdSportsMotorsports, label: 'Helmets'}
        ];

        return (
            <div className='slider-container w-[98]'>
                <Slider {...settings}>
                    {
                        productItems.map((item, index) => {
                            return (
                                <Card className="w-full grid justify-center p-2" key={index}>
                                    <CardHeader className="grid justify-center productItemCard hover:bg-[#ef4444]">
                                        <RenderIconComponent IconName={item.icon}/>
                                        <CardFooter className="pt-5 text-black justify-center grid">
                                            <span>{item.label}</span>
                                        </CardFooter>
                                    </CardHeader>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </div>
        );
  }
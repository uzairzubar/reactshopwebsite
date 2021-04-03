import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import image1 from './Images/ali-inay-0h9LsnY13Hs-unsplash.jpg'
import image2 from './Images/delevery.jpg'
import image3 from './Images/ioi.jpg'
import image4 from './Images/freedelevery.jpg'
import image5 from './Images/sven-mieke-7NTc2bMDHHg-unsplash.jpg'
import image6 from './Images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'
import {Link} from "react-router-dom";

export default function CarouselSlider() {
    const slideData = [
        {
            url:image1,
            name:"OUR-PRODUCTS",
            web:'/shoop'
        },
        {
            url:image3,
            name:"CubeSidePickUp",
            web:'/cube'
        },
        {
            url:image4,
            name:"Free-Shipping",
            web: '/shiping'
        },
        {
            url:image2,
            name:"Delivery",
            web: '/delevery'
        },
        {
            url:image5,
            name:"Save-Covid(19)",
            web: '/save'
        },
        {
            url:image6,
            name:"FURNITURE MANUFACTURING",
            web: '/manu'
        }
    ]
    return(
        // <this is all atribute define its website></this>
        <Carousel
            autoPlay={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            infiniteLoop={true}
        >
            {
                slideData.map((data) =>

                    <div>
                        <image src={data.url} alt={"image"} />
                        <Link to={data.web}>
                            <p className="legend">
                                {data.name}
                            </p>
                        </Link>
                    </div>
                )
            }
        </Carousel>
    )

}
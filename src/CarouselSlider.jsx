import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import image1 from './Images/school.jpg'
import image2 from './Images/teacher1.jpg'
import image3 from './Images/jeffrey-f-lin-nEVpAGpTKnI-unsplash.jpg'
import image4 from './Images/annie-spratt-OIuCXxx08yg-unsplash.jpg'
import image5 from './Images/schoolbus.jpg'
import {Link} from "react-router-dom";

export default function CarouselSlider() {
    const slideData = [
        {
            url:image1,
            name:"STUDY",
            web:'/study'
        },
        {
            url:image3,
            name:"SPORTS",
            web:'/sport'
        },
        {
            url:image4,
            name:"OUR-AIM",
            web: '/ouraim'
        },
        {
            url:image2,
            name:"TEACHER",
            web: '/teacher'
        },
        {
            url:image5,
            name:"TRANSPORT",
            web: '/transport'
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
                        <img src={data.url} />
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
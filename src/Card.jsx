import React from "react";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CarouselSlider from "./CarouselSlider";

import Dialogi1 from "./Tools/Dialogi1";
import Dialogi2 from "./Tools/Dialogi2";
import Dialogi3 from "./Tools/Dialogi3";
import Dialogi4 from "./Tools/Dialogi4";
import Products from "./Products";
export default function Card() {
    return(
        <>
            <CarouselSlider/>
                <div>
                    <div className={" bg-dark mx-5"}><h2 className={"text-white"}>
                        <center>Our Services
                  {/*<hr className={"bg-success mt-2 "} width={"10%"} style={{height:"2px"}} />*/}
                    </center></h2>
                    </div>
                        <div className={"row container"}>

                         <div className={"col ml-5  mx-5 bg-success text-white"}><AirportShuttleIcon/>
                                <h2>Curbside Pickup </h2>
                                 <p>Order online, drive up, check in & pick up</p>
                                        <Dialogi1/>
                            </div>
                         <div className={"col mr-5 bg-success text-white"}><DirectionsWalkIcon/>
                                <h4>Same-day Delivery</h4>
                                 <center>
                         <p>Powered-BY
                         <hr className={"bg-danger mt-0 "} width={"14%"} style={{height:"3px"}}/>
                        <div className={"d-flex justify-content-center align-items-center"}>
                        <WhatshotIcon className={"mr-1"}/>
                        <h5>DOORDASH</h5>
                            </div>
                        </p>
                         </center>
                         <Dialogi2/>
                                </div>
                <div className={"col mr-5 bg-success text-white"}><LocalShippingIcon/>
                    <h4>Free Shipping</h4>
                    <p>Sign In & Enjoy Free Shipping Over $49</p>
                    <Dialogi4/>
                </div>
                    <div className={"col bg-success text-white"}><SentimentSatisfiedAltIcon/>
                        <h4>Cleaning and Safety</h4>
                        <p>Order online,for protected by Covid-19</p>
                        <Dialogi3/>
                    </div>
            </div>
            </div>
            <Products/>
        </>

)

}
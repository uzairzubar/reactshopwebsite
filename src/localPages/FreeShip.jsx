
import EditLocationIcon from '@material-ui/icons/EditLocation';
import MapIcon from '@material-ui/icons/Map';
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../Images/freedelevery.jpg'
import React from "react";
import SimpleMap from "./SimpleMap";
import Container from "@material-ui/core/Container";
import Dialogi from "../Tools/Dialogi";
import Box from "@material-ui/core/Box";
import Alerat2 from "../Tools/Alerat2";
export default function CubSide() {
    return(
        <Container className={"mb-5"}>
            <div className={" bg-dark my-5"}><h2 className={" text-white animate__animated animate__flipInX animate__delay-2s"}>
                <center>We Provided 'Free Shaping'
                    {/*<hr className={"bg-success mt-2 "} width={"10%"} style={{height:"2px"}} />*/}
                </center></h2>
            </div>
            <Alerat2/>
            <img src={img1} alt={"img"} className={"bg text-white"} width={"100%"} />
            <hr className={"bg-success mt-2 "} width={"70%"} style={{height:"22px"}} />

            <div className={" bg-dark my-5"}><h2 className={"text-white animate__animated animate__flipInX animate__delay-2s animate__repeat-2"}>
                <center>For You Our Location
                    {/*<hr className={"bg-success mt-2 "} width={"10%"} style={{height:"2px"}} />*/}
                </center></h2>
            </div>
            <Box className={"container mb-5"}>
                <h3 className={"bg-success text-white"}> <MapIcon/>Enter your address <EditLocationIcon style={{ fontSize: 30 }}/></h3> <textarea type={"text"}/> <Dialogi/>
            </Box>

            <SimpleMap/>
        </Container>
    )

}
import Box from "@material-ui/core/Box";
import React from "react";
import vedio1 from '../vedio/crona.mp4'
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../Images/sven-mieke-7NTc2bMDHHg-unsplash.jpg'
import Alerat3 from "../Tools/Alerat3";
export default function Save() {
const myStyle = {
    background: "url("+img1+") no-repeat center",
    backgroundSize: "cover",
    height: "450px"
}
    return(
        <>
            <Box style={myStyle} className={"d-flex justify-content-center align-items-center "}>
      <h3 className={" text-dark animate__animated animate__flipInX animate__delay-2s animate__repeat-2"}>WE PROTECT THE GOODS EVERY CONDITION
          <hr className={"bg-danger mt-2 "} width={"40%"} style={{height:"2px"}} />
      </h3>
            </Box>
            <div>
                <h3 className={" text-white mt-4 bg-success animate__animated animate__flipInX animate__delay-2s animate__repeat-2"}>Please see .............(How WE Save OUR Products)</h3>
             <Alerat3/>
              <center>
            <video className={"mb-5"} src={vedio1} autoPlay loop controls></video>
              </center>

            </div>
        </>
                )}
import Container from "@material-ui/core/Container";
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import React from "react";
import Typography from "@material-ui/core/Typography";
import img1 from "../Images/ioi.jpg";
import Button from "@material-ui/core/Button";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Alerat5 from "../Tools/Alerat5";
import Box from "@material-ui/core/Box";
import MapIcon from "@material-ui/icons/Map";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import Dialogi from "../Tools/Dialogi";
import {Label} from "@material-ui/icons";

export default function ContactUs() {
    const myStyle = {
        background: "url("+img1+") no-repeat center",
        backgroundSize: "cover",
        height: "700px"
    }
    return(
        <Container>
            <div className={"contact_info mb-5"}>
                <div className={"container-fluid mb-5"}>
                    <div style={myStyle} className={"row d-flex justify-content-center"}>
                        <div className={"col-lg-10 offset-lg-1 bg-success text-white mt-5 "}>
                            <div className={"d-flex  align-items-center"}>
                            <PhoneAndroidIcon/>
                            <Typography>+Phone</Typography>
                            </div>

                            <div className={"contact_info_item align-items-center"}>
                                <Typography>+9278778277</Typography>
                                    <Button className={"btn btn-primary btn-lg btn-block"}>Send</Button>
                                                        <Alerat5/>
                            </div>
                        </div>
                        <div className={"col-lg-10 offset-lg-1 bg-success text-white mt-5 "}>
                            <div className={"d-flex  align-items-center"}>
                            <EmailIcon/>
                            <Typography>Email</Typography>
                            </div>

                            <div className={"contact_info_item align-items-center"}>
                                <Typography>lali@g.klo</Typography>
                                <Button className={"btn btn-primary btn-lg btn-block"}>Send</Button>
                                <Alerat5/>
                            </div>
                        </div>
                        <div className={"col-lg-10 offset-lg-1 bg-success text-white mt-5 "}>
                            <div className={"d-flex  align-items-center"}>
                            <MyLocationIcon/>
                            <Typography>Address</Typography>
                            </div>

                            <div className={"contact_info_item align-items-center"}>
                                <Box className={"container mb-5"}>
                                    <h3 className={"bg-success text-white"}> <MapIcon/>Enter your address <EditLocationIcon style={{ fontSize: 30 }}/></h3> <textarea type={"text"}/> <Dialogi/>
                                </Box>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className={"contact_form"}>
            <div className={"container"}>
            <div className={"row"}>
            <div className={"col_lg-10 offset-lg-1"}>
            <div className={"contact_form_container py-5"}>
                <div className={"contact_form_title"}>
                    <Typography variant={"h3"} className={"font-weight-bold"}> Get in Touch</Typography>
                </div>
                <form id={"contact_form"}>
                    <div className={"contact_form_name d-flex justify-content-between align-item-between"}>
                        <Label>Enter-Name</Label>
                        <input type={"text"} id={"contact_form_name"}
                               placeholder={"Enter Your Name"}
                               required={"true"}
                        />
                        <input type={"text"} id={"contact_form_email"}
                               placeholder={"Enter Your Email"}
                               required={"true"}
                        />
                        <input type={"number"} id={"contact_form_number"}
                               placeholder={"Enter Your Number"}
                               required={"true"}
                        />
                    </div>
                    <div className={"contact_form_text mt-5"}>
                        <textarea className={"text_field contact_form_message"}
                                  placeholder={"Message"}
                                  cols={"30"}
                                  rows={"10"}/>
                    </div>
                    <div className={"contact_form_button"}>
                        <button type={"submit"} className={"btn btn-primary btn-lg"}>Send Message</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>


        </Container>
    )

}
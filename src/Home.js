
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import {NavDropdown} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Card from "./Card";
import ToolTip from "./ToolTip";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Box} from "@material-ui/core";

import AddProduct from "./Product/AddProduct";
import ViewProduct from "./Product/ViewProduct";
import ViewSingleProduct from "./Product/ViewSingleProduct";
import {useSelector} from "react-redux";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import ViewCard from "./Product/ViewCard";
import Delevery from "./localPages/Delevery";
import Products from "./Products";
import CubSide from "./localPages/Curbside";
import FreeShip from "./localPages/FreeShip";
import Save from "./localPages/Save";
import Manufac from "./localPages/Manufac";
import EditProduct from "./Product/EditProduct";
import LogIn from "./User/LogIn";
import Register from "./User/Register";
import ViewUser from "./User/ViewUser";
import WelCome from "./User/WelCome";
import ContactUs from "./localPages/ContactUs";
export default function Home() {

    const cart = useSelector(state => state.cart)

    const userLogout = () => {
        localStorage.removeItem("loginEmail")
        localStorage.removeItem("loginNumber")
        localStorage.removeItem("loginPassword")
        localStorage.removeItem("loginName")
        localStorage.removeItem("loginDate")
        localStorage.removeItem("loginID")
        localStorage.removeItem("loginProfile")
    }

    const handelScrolTop = () => {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
}
    return(
        <Box>
            {JSON.stringify(cart)}
        <Router>
            <Navbar bg="success" expand="lg">
                <Navbar.Brand Link={"/"} ><StorefrontIcon style={{ fontSize: 50 }}></StorefrontIcon>MYSHOOP@</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={"/card"}>Home</Nav.Link>
                        <Nav.Link href={"/shoop"}>Products</Nav.Link>
                        {localStorage.getItem('loginEmail') && (
                            <>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/viewuser">View-User</NavDropdown.Item>

                                <NavDropdown.Item href="/addproduct">ADDProduct</NavDropdown.Item>
                            <NavDropdown.Item href="/viewproduct">View-Product</NavDropdown.Item>
                            <NavDropdown.Item href="/viewsingleproduct">ViewSingleProduct</NavDropdown.Item>
                            <NavDropdown.Item href="/edit">EditProduct</NavDropdown.Item>
                            <NavDropdown.Divider />
                            </NavDropdown>
                            </>
                        )}

                        {!localStorage.getItem('loginEmail') && (
                            <>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">LOG-IN</NavDropdown.Item>
                            <NavDropdown.Item href="/Register">REGISTER</NavDropdown.Item>
                            <NavDropdown.Item href="/welcome">WELcome</NavDropdown.Item>
                        </NavDropdown>
                            </>
                        )}
                    </Nav>
                    {
                        localStorage.getItem('loginEmail') && (
                            <li  className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" to={"#"}>
                                    Welcome,{localStorage.getItem('loginName')}
                                </Link>
                                <NavDropdown  className="dropdown-menu">
                                    <NavDropdown.Item href="/welcome">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/login" onClick={userLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        )
                    }

                    {/*<Form inline>*/}
                    {/*    <TextField*/}
                    {/*        type={"text"}*/}
                    {/*        placeholder={"Search"}*/}
                    {/*        className={"mr-sm-2"}/>*/}
                    {/*    <Button variant={"outline-success"}>Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
                <div className={"mr-4"}>
                    <ToolTip/>
                </div>
                <div className={"mr-4"}>
                <FavoriteIcon className={"mr-4"} style={{ fontSize: 30 }}/>

                <Badge badgeContent={cart.totalQuantity} color={"secondary"} className={"mr-2"}>
                    <ShoppingCartIcon className={"mr-1"} style={{ fontSize: 30 }}/>
                </Badge>
                    <Button onClick={ (event)=>{
                        event.preventDefault(
                        window.location='/viewcard')
                    }}>
                        Card
                    </Button>

                 <span className={"mr-3"}>
                     PKR. {cart.totalPrize}
                 </span>

                    <ShoppingBasketIcon className={"mr-4"} style={{ fontSize: 30 }}/>


                </div>
            </Navbar>
            <Switch>
                <Route path={"/card"}>
                    <Card/>
                </Route>
                <Route path={"/contact"}>
                    <ContactUs/>
                </Route>
                <Route path={"/edit"}>
                    <EditProduct/>
                </Route>
                <Route path={"/save"}>
                    <Save/>
                </Route>
                <Route path={"/manu"}>
                    <Manufac/>
                </Route>
                <Route path={"/shiping"}>
                    <FreeShip/>
                </Route>
                <Route path={"/delevery"}>
                    <Delevery/>
                </Route>
                <Route path={"/cube"}>
                    <CubSide/>
                </Route>
                <Route path={"/addproduct"}>
                    <AddProduct/>
                </Route>
                <Route path={"/shoop"}>
                    <Products/>
                </Route>
                <Route path={"/viewcard"}>
                    <ViewCard/>
                </Route>
                <Route path={"/viewproduct"}>
                    <ViewProduct/>
                </Route>
                <Route path={"/login"}>
                    <LogIn/>
                </Route>
                <Route path={"/Register"}>
                    <Register/>
                </Route>
                <Route path={"/viewuser"}>
                    <ViewUser/>
                </Route>
                <Route path={"/welcome"}>
                    <WelCome/>
                </Route>
                <Route path={"/viewsingleproduct/:id"} render={(props) => <ViewSingleProduct {...props}/>}/>

            </Switch>
            <Fab onClick={handelScrolTop} color={"secondary"} className={"float-right mr-3"}>
                <ArrowUpwardIcon/>
            </Fab>

            <Box className={"bg-dark py-3"}>
                <Container maxWidth={"xs"} className={"d-flex justify-content-between align-items-center"}>
                    <IconButton size={"small"} className={"text-white"} onClick={() => {
                        window.location = 'https://www.google.com'
                    }}>
                        <FacebookIcon fontSize={"large"}
                                      className={"text-white"} onClick={() => {
                            window.location = 'https://www.youtube.com/channel/UCx7ElEL4GSJCj_VunepiIlg'
                        }}/>
                    </IconButton>

                    <IconButton size={"small"} className={"text-white"}>
                        <TwitterIcon fontSize={"large"} />
                    </IconButton>

                    <IconButton size={"small"} className={"text-white"}>
                        <WhatsAppIcon fontSize={"large"} />
                    </IconButton>

                    <IconButton size={"small"} className={"text-white"}>
                        <YouTubeIcon fontSize={"large"}
                                     className={"text-white"} onClick={() => {
                            window.location = 'https://www.youtube.com/channel/UCx7ElEL4GSJCj_VunepiIlg'
                        }}/>
                    </IconButton>
                </Container>

                <Box className={"row mt-5  mr-5 bg-dark container"}>
                    <div className={"col-2"}></div>

                    <div className={"col  mr-2  text-white"}><Button href={"/shoop"}><h5>SHOP</h5></Button></div>
                    <div className={"col mr-2 text-white"}><Button href={"/shoop"}><h5>SERVICES</h5></Button></div>
                    <div className={"col mr-2 text-white"}><Button href={"/shoop"}><h5>BESPOKE</h5></Button></div>
                    <div className={"col mr-2 text-white"}><Button href={"/shoop"}><h5>PROJECTS</h5></Button></div>
                    <div className={"col mr-2 text-white"}><Button href={"/shoop"}><h5>TERMS</h5></Button></div>
                    <div className={"col mr-2 text-white"}><Button href={"/contact"}><h5>CONTACT</h5></Button></div>

                </Box>
                <Box className={" mt-4 row"}>
                    <div className={"col-5"}></div>
                    <div className={"col text-white"}>
                        copyright &copy;.all rights reserved.

                    </div>
                    <div className={"col-4"}></div>

                </Box>
            </Box>

        </Router>
        </Box>
)

}
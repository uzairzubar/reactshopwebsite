import {Box} from "@material-ui/core";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

import axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';

import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MyStyle from "./MyStyle.module.css";
import {addToCard} from "./reducxTopic/action/indux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {useDispatch} from "react-redux";

export default function ViewProduct() {
    const dispatch = useDispatch()

    const [product,setProduct] = React.useState(null)

    axios.get('http://localhost:4000/product/getproduct')
        .then(response => setProduct(response.data))
        .catch(error => console.log(JSON.stringify(error)))

    let productData
    if (product)
        productData = product.map((data) => (
            <Grid item lg={3} xs={3} className={MyStyle.productHeader}>
                <img src={data.image} alt={"img"} component={"img"} width={"100%"}/>
                <Box className={"d-flex justify-content-between align-items-center my-2"}>
                    <Typography color={"primary"} className={"text-capitalize font-weight-bold"}>{data.name}</Typography>
                    <Typography color={"secondary"} className={"small"}>PKR. {data.price}</Typography>
                </Box>
                <div className={"d-flex justify-content-center align-items-center bg-light border py-2"}>
                    <IconButton size={"small"} className={"text-danger"} onClick={ (event) => {
                        event.preventDefault()
                        dispatch(addToCard(data))}}>
                        <AddShoppingCartIcon/>
                    </IconButton>
                    {/*<IconButton variant={"outlined"}*/}
                    {/*            onClick={ (event) => {*/}
                    {/*                event.preventDefault()*/}
                    {/*                dispatch(addToCart(data))}}>card</IconButton>*/}

                    <IconButton className={"text-info mx-3"} size={"small"}>
                        <FavoriteIcon/>
                    </IconButton>

                    <IconButton className={"ml-auto"} size={"small"} type={"submit"} onClick={ (event) => {
                        event.preventDefault()
                        window.location = '/viewsingleproduct/'+data._id
                        // alert('Testing' + data.name)
                    }}>                        <VisibilityIcon/>
                    </IconButton>
                </div>
            </Grid>
        ))
    else
        productData =''

    return(
        <>
            <Container>
                <Box my={5}>

                        <Grid>
                            <Typography variant={"h4"} align={"center"} className={"mb-4"}>OUR-PRODUCTS</Typography>
                            <hr className={"bg-danger mt-1 "} width={"12%"} style={{height:"2px"}} />
                            <Grid container spacing={5} className={"mt-2"}>
                                {productData}
                            </Grid>
                        </Grid>
                </Box>

            </Container>

        </>
    )}
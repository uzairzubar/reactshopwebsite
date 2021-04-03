import React from "react";
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PickImage from 'react-file-base64'
import axios from "axios";

import Snackbar from '@material-ui/core/Snackbar';
export default function AddProduct() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [product,setProduct] = React.useState({
        name:'',
        category:'',
        price:0,
        image:''
    })
    const dataSaved = (event) => {
        event.preventDefault()
        const getAllProductValues = {
            name:product.name,
            category:product.category,
            price:product.price,
            image:product.image
        }
        // console.log(getAllProductValues)
        //
        axios.post('http://localhost:4000/product/addproduct',getAllProductValues)
            .then(response => {
                console.log(response.data)
                handleClick()
            })
        setProduct({
            name:'',
            price:0,
            category:'',
            image:''
        })
    }
    return(
        <Container>
            <Box my={5}>
                <Typography align={"center"}color={"textSecondary"} variant={"h3"} className={"mb-4"}>Add Product</Typography>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Data has been save"
                />

                <form onSubmit={dataSaved}>
                    <TextField
                        label={"Product Name"}
                        fullWidth
                        value={product.name}
                        onChange={(e) => setProduct({...product, name: e.target.value})}
                        className={"mb-3"}
                    />
                    <TextField
                        label={"Price"}
                        fullWidth
                        value={product.price}
                        onChange={(e) => setProduct({...product, price: e.target.value})}

                        className={"mb-3"}
                    />
                    <PickImage
                        type={"file"}
                        onDone={({base64}) => setProduct({...product, image: base64})}
                        mutiple={false}
                        className={"mb-5"}
                    />
                    <TextField
                        label={"category"}
                        onChange={(e) => setProduct({...product, category: e.target.value})}

                        value={product.category}
                        fullWidth
                        className={"mb-3 mt-4"}
                    />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        fullWidth
                        className={"mb-3"}
                        color={"secondary"}> Save Product</Button>
                </form>


            </Box>

            {/*<we use this when we want to show all values below the screen />*/}
            {/*<h1>{product.name}</h1>*/}
            {/*<h1>{product.description}</h1>*/}
            {/*<h1>{product.price}</h1>*/}
            {/*<h1>{product.likeCount}</h1>*/}
            {/*<h1>{product.category}</h1>*/}
        </Container>
    )
}
import Box from "@material-ui/core/Box";
import React from "react";
import axios from "axios";
import PickImage from 'react-file-base64'

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function EditProduct(props) {

    const [singleProduct, setSingleProduct] = React.useState(null)
             axios
             .get('http://localhost:4000/product/' + props.request.params.id)
            .then(response => singleProduct(response.data))

        const updateData = (event) => {
        event.preventDefault()
            event.preventDefault()
            const getAllUpdateProductValues = {
                name:singleProduct.name,
                category:singleProduct.category,
                price:singleProduct.price,
                image:singleProduct.image
            }
            // console.log(getAllProductValues)
            //
            axios.put('http://localhost:4000/product/'+singleProduct._id+'/edit',getAllUpdateProductValues)
                .then(response => console.log(response.data))
            setSingleProduct({
                name:'',
                category:'',
                price:0,
                image:''
        })
    }

    //     setSingleProduct(productData.data)
    // }

    // React.useEffect(()=> {
    //     getSingleData()
    // })

    let productData

    if (singleProduct) {
        productData = <Container>
            <Box my={5}>
                <Typography align={"center"}color={"textSecondary"} variant={"h3"} className={"mb-4"}>  EDIT Product - {singleProduct.name}</Typography>
                <form onSubmit={updateData}>
                    <TextField
                        label={"Product Name"}
                        fullWidth
                        value={singleProduct.name}
                        onChange={(e) => setSingleProduct({...singleProduct, name: e.target.value})}
                        className={"mb-3"}
                    />
                    <TextField
                        label={"Category"}
                        onChange={(e) => setSingleProduct({...singleProduct, category: e.target.value})}

                        fullWidth
                        value={singleProduct.category}
                        className={"mb-3"}
                    />
                    <TextField
                        label={"Price"}
                        fullWidth
                        value={singleProduct.price}
                        onChange={(e) => setSingleProduct({...singleProduct, price: e.target.value})}

                        className={"mb-3"}
                    />
                    <PickImage
                        type={"file"}
                        onDone={({base64}) => setSingleProduct({...singleProduct, image: base64})}
                        mutiple={false}
                        className={"mb-5"}
                    />
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        fullWidth
                        className={"mb-3"}
                        color={"secondary"}> Edit  Product</Button>
                </form>


            </Box>

            <we use this when we want to show all values below the screen />
            <h1>{singleProduct.name}</h1>
            <h1>{singleProduct.price}</h1>
            <h1>{singleProduct.category}</h1>
        </Container>
    }
    else
    {
        productData = ''
    }

    return(
        <Box>
            {productData}
        </Box>
    )

}
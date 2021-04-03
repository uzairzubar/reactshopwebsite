import {Box} from "@material-ui/core";
import axios from "axios";
import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {useSelector,useDispatch} from "react-redux";
import {decrement, increment} from "../reducxTopic/action/indux";
import {checkUser} from "../reducxTopic/action/userLogged";

export default function ViewSignalProduct(props) {

    const counter =  useSelector(state => state.counter)
    const user =  useSelector(state => state.user)
    const dispatch = useDispatch()

    const [loading,setLoading] = React.useState(false);
    const openLoading = () => {
        setLoading(true)
    }
    const closeLoading = () => {
        setLoading(false)
    }
    const [singleProduct, setSingleProduct] = React.useState(null)
    const getSingleData = async () => {
        openLoading()
        const productData = await axios.get('http://localhost:4000/product/' + props.match.params.id)
        setSingleProduct(productData.data)
        closeLoading()
    }

    React.useEffect(()=> {
        getSingleData()
    })

    let productData

    if (singleProduct)
    {
        productData = <Box mt={5}>
            <Typography className={"mb-3"} align={"center"} variant={"h2"} color={"secondary"}>
                View Record:  {singleProduct.name}
            </Typography>
            <Grid container>
                <Grid item md={9}>
                    <Grid container spacing={4}>
                        <Grid item md={5}>
                            <Typography variant={"h5"}>Product Name:</Typography>
                        </Grid>
                        <Grid item md={7}>
                            <Typography variant={"h5"}>{singleProduct.name}</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <Typography variant={"h5"}>Product category:</Typography>
                        </Grid>
                        <Grid item lg={5} xl={5}>
                            <Typography> {singleProduct.category}</Typography>
                        </Grid>
                        <Grid item md={5}>
                            <Typography variant={"h5"}>Product price:</Typography>
                        </Grid>
                        <Grid item lg={5} xl={5}>
                            {singleProduct.price}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} lg={3} xl={3}>
                    <img className={"img-thumbnail"} src={singleProduct.image} width={"100%"} alt={singleProduct._id}/>
                </Grid>
            </Grid>
        </Box>
    }

    else {
        productData = ''
    }
    return(
        <Container maxWidth={"md"}>
            {productData}
            {/*{JSON.stringify(singleProduct)}*/}

            <Backdrop open={loading} onClick={closeLoading}>
                <Dialog open={loading} onClose={closeLoading}>
                    <DialogTitle>Loading</DialogTitle>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <CircularProgress
                                    color={"secondary"}
                                ></CircularProgress>
                            </ListItemAvatar>
                            <ListItemText primary={"Please wait for a while"}></ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </Backdrop>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <span>{counter}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            { user ? <h1> Sensitive Data</h1> : ""}
            <button onClick={() => dispatch(checkUser())} >Change state </button>
        </Container>
    )

}
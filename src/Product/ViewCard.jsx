import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useSelector} from "react-redux";
import Products from "../Products";

export default function ViewCard() {
    const cart = useSelector(state => state.cart)
    return(
        <Container>
            <Products/>
            <Box mt={4}>
                <Typography variant={"h3"} align={"center"} className={"text-danger mb-5"}>
                    View CarD
                    {JSON.stringify(cart)}

                </Typography>
                <Divider/>
                <table className={"table"}>
                    <thead className={"bg-dark"}>
                    <tr className={"text-white"}>
                        <th>S/N</th>
                        <th>image</th>
                        <th>Product Name</th>
                        <th>category</th>

                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{
                        cart.products.map((data,index)=> (
                            <tr>
                                <td>{index+1}</td>
                                <td width={"10%"}>
                                    <img src={data.image} alt={data.name} width={"100%"}/>
                                </td>
                                <td>{data.name}</td>
                                <td>{data.category}</td>

                                <td>PKR.{data.price}</td>
                            </tr>
                        ))
                    }

                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={3} align={"right"} className={"font-weight-bold"}>Discount</td>
                        <td className={"text-danger font-weight-bold"}>0%</td>
                    </tr>
                    <tr>
                        <td colSpan={3} align={"right"} className={"font-weight-bold"}>Quantity</td>
                        <td className={"text-danger font-weight-bold"}>{cart.totalQuantity}</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <td colSpan={3} align={"right"} className={"font-weight-bold"}>category</td>*/}
                    {/*    <td className={"text-danger font-weight-bold"}>category .{cart.category}</td>*/}
                    {/*</tr>*/}
                    <tr>
                        <td colSpan={3} align={"right"} className={"font-weight-bold"}>Grand Total</td>
                        <td className={"text-danger font-weight-bold"}>PKR .{cart.totalPrize}</td>
                    </tr>
                    </tfoot>
                </table>
            </Box>
        </Container>
    )

}

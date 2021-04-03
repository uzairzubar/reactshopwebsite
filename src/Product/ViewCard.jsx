import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function Card() {
    return(
        <Container>
            <Box mt={5}>
                <Typography variant={"h3"} align={"center"} className={"text-danger"}>Card</Typography>
                <Divider/>
                <table className={"table"}>
                    <thead className={"thead-dark"}>
                    <tr>
                        <th>S/N</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                    <td colSpan={4} align={"right"} className={"font-weight-bold"}>Grand--Total</td>
                    <td className={"text-danger font-weight-bold"}>PKR.</td>
                    <td colSpan={4} align={"right"} className={"font-weight-bold"}>Quantity</td>
                    <td className={"text-danger font-weight-bold"}>PKR.</td>
                    <td colSpan={4} align={"right"} className={"font-weight-bold"}>Discount</td>
                    <td className={"text-danger font-weight-bold"}>PKR.</td>

                    </tfoot>
                </table>
            </Box>
        </Container>
    )

}
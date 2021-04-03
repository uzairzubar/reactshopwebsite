import Tooltip from "@material-ui/core/Tooltip";
import Fade from "react-bootstrap/Fade";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from "react";

export default function ToolTip() {
    return(
        <div>
            <Tooltip title={"Time to Start Shoping"}
                     placement={"bottom-start"}
                     TransitionComponent={Fade}
                     TransitionProps={{
                         timeout:800
                     }}
                     enterDelay={1000}
                     leaveDelay={2500}
            >
                    <AddShoppingCartIcon style={{ fontSize: 40 }}></AddShoppingCartIcon>

            </Tooltip>
        </div>
    )

}
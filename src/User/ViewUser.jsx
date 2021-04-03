import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";

export default function ViewUser() {
    const [user,setUser] = React.useState('')

    const getUser = async () => {
      const response = await axios.get('http://localhost:4000/user')
        setUser(response.data)
    }
    React.useEffect(()=> {
        getUser()
    },[])
    let userData

    if (user)
        userData =
            user.map((data, index) => (
                <Grid item lg={4} key={index}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar className={"bg-danger text-uppercase"}>{data.name.charAt(0)}</Avatar>}
                            title={data.name}
                            subheader={moment(data.date).fromNow()}
                        />
                        <CardContent>
                            <Typography>{data._id}</Typography>
                            <Typography>{data.name}</Typography>
                            <Typography>{data.email}</Typography>
                            <Typography>{data.phone}</Typography>
                            <Typography>{data.date}</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton color={"primary"}>Show</IconButton>
                            <IconButton className={"text-warning"}>Update</IconButton>
                            <IconButton color={"secondary"}>Delete</IconButton>
                        </CardActions>
                    </Card>
                </Grid>

    ))

    else userData =''
return(
    <Container>
        <Box my={5}>
            <Typography variant={"h4"} className={"text-danger font-wait-bold mb-1"} align={"center"}>View User</Typography>
            <hr width={"10%"} className={"bg-danger mb-4"} style={{height: "3px"}}/>

            <Grid container spacing={5}>
                {userData}
            </Grid>

        </Box>
    </Container>
)
}
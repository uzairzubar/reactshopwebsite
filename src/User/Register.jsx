import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function Register() {

    const [user,setUser] = React.useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })

    const userSaved = (event) => {
        event.preventDefault()
        const userSavedValues = {
           name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password
        }
        axios.post('http://localhost:4000/user/saveUser',userSavedValues)
            .then(response => {
                console.log(response.data)
                alert("Data has been saved")
                window.location = 'http://localhost:3000/viewuser'
            })
    }

    return(
        <Container>
            <Box my={4}>
                <Typography variant={"h3"} align={"center"} className={"text-danger font-weight-bold"}>Register User</Typography>
           <hr className={"bg-danger"} width={"15%"} style={{height: "4px"}}/>
                <form onSubmit={userSaved}>
                    <TextField label={"Full name"}
                               fullWidth
                               className={"mb-3"}
                                value={user.name}
                                onChange={(event) => {setUser({...user,name: event.target.value})}}
                    />
                    <TextField type={"email"}
                               label={"EmailAddress"}
                               fullWidth
                               className={"mb-3"}
                                value={user.email}
                               onChange={(event) => {setUser({...user,email: event.target.value})}}

                    />
                    <TextField type={"number"}
                               label={"phoneNumber"}
                               fullWidth
                               className={"mb-3"}
                                value={user.phone}
                               onChange={(event) => {setUser({...user,phone: event.target.value})}}

                    />
                    <TextField
                        value={user.password}
                        onChange={(event) => {setUser({...user,password: event.target.value})}}

                        label={"Password"} fullWidth
                        type={"password"}
                        className={"mb-3"}/>
                    <Button type={"submit"} variant={"contained"} color={"secondary"}>Register User</Button>
                </form>
            </Box>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.password}</h1>
        </Container>
    )
}
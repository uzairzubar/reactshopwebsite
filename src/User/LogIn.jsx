import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";

export default function LogIn() {

    // const [googleUser,setGoogleUser] = React.useState(null)

    const responseFacebook = (response) => {
        console.log(response)
        localStorage.setItem("loginEmail",response.email)
        localStorage.setItem("loginName",response.name)
        localStorage.setItem("loginProfile",response.picture.data.url)

        setMsg("login Successfully !!!")
        window.location = 'http://localhost:3000/welCome'

    }

    const googleResponse = (response) => {
        console.log(response.profileObj)
        // setGoogleUser(JSON.stringify(response.profileObj))
        localStorage.setItem("loginEmail",response.profileObj.email)
        localStorage.setItem("loginName",response.profileObj.name)
        localStorage.setItem("loginProfile",response.profileObj.imageUrl)

        setMsg("login Successfully !!!")
        window.location = 'http://localhost:3000/welCome'
    }


    const [user,setUser] = React.useState({
       email:'',
       password:''
    })

    const [msg,setMsg] = React.useState('')


    const userLogged = (event) => {
        event.preventDefault()
        const userLoggedValues = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password
        }
        axios.post('http://localhost:4000/user/login',userLoggedValues)
            .then(response => {
                if (response.data === "wrong Email / Password"){
                    alert(response.data)
                    setMsg(response.data)}

                else {
                    // alert("logIn Successfully")

                    localStorage.setItem("loginEmail",response.data.email)
                    localStorage.setItem("loginNumber",response.data.phone)
                    localStorage.setItem("loginPassword",response.data.password)
                    localStorage.setItem("loginName",response.data.name)
                    localStorage.setItem("loginDate",response.data.date)
                    localStorage.setItem("loginID",response.data._id)
                    localStorage.removeItem("loginProfile")

                    setMsg("login Successfully !!!")
                    window.location = 'http://localhost:3000/welCome'
                }
            })
    }
    return(
        <Container maxWidth={"sm"}>
            <Box my={4}>
                <Card>
                    <CardHeader
                        avatar={<Avatar className={"bg-dark"}>L</Avatar> }
                        title={
                            <Typography variant={"h3"} className={"text-danger font-weight-bold font-italic"}>
                                LogIn User
                            </Typography>
                        }/>
                    {/*<CardMedia/>*/}
                    <CardContent>
                        <form onSubmit={userLogged}>
                            <TextField type={"email"} label={"EmailAdress"}
                                       value={user.email}
                                       onChange={(event) => {setUser({...user,email: event.target.value})}}

                                       fullWidth className={"mb-3"}/>
                                       <TextField type={"number"} label={"PhoneNumber"}
                                       value={user.phone}
                                       onChange={(event) => {setUser({...user,phone: event.target.value})}}

                                       fullWidth className={"mb-3"}/>
                            <TextField type={"password"}
                                       value={user.password}
                                       onChange={(event) => {setUser({...user,password: event.target.value})}}

                                       label={"Password"} fullWidth className={"mb-3"}/>
                            {/*<Button type={"submit"} variant={"contained"} color={"secondary"}>Login</Button>*/}
                            <Button type={"submit"} variant={"contained"} color={"secondary"} fullWidth className={"mb-3"}>Login</Button>
                            <hr/>
                        </form>
                        <FacebookLogin
                            appId="3966921043359143"
                            autoLoad={true}
                            fields="name,email,picture"
                            // scope="public_profile,user_friends,user_actions.books"
                            callback={responseFacebook}
                        />
                        <GoogleLogin
                            clientId={'878333660222-g6j04in1ee1bept95q5k6e0o8dfos4al.apps.googleusercontent.com'}
                            className={"w-100"}
                            buttonText={"sign Up With Google"}
                            onSuccess={googleResponse}
                            onFailure={googleResponse}
                            cookiePolicy={'single_host_origin'}
                        />
                    </CardContent>
                </Card>

                <Typography className={"text-center mt-4 font-weight-bold font-italic text-danger text-uppercase"} variant={"h4"}>{msg}</Typography>
            </Box>
            {/*<h1>{googleUser}</h1>*/}
            {/*<h1>{user.email}</h1>*/}
            {/*<h1>{user.password}</h1>*/}
        </Container>
    )
}
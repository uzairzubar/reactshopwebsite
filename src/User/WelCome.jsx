import React from "react";
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from "@material-ui/core/Grid";
import img1 from '../Images/george-desipris-WpLm6hix8i8-unsplash.jpg'

export default function welCome() {
    return(
        <Container>
            <Box my={5}>
                <Typography variant={"h4"} className={"text-center text-danger text-uppercase"}>
                    WelCome User---{localStorage.getItem('loginName')}
                </Typography>
                <hr className={"bg-danger"} width={"12%"} style={{height:"5px"}}/>
                <Grid container>
                    <Grid item md={9}>
                        <Grid container spacing={3}>
                            {
                                localStorage.getItem('loginID') && (
                                    <>
                                    <Grid item md={3} className={"border-bottom border-dark font-weight-bold"}>
                                        User-ID:
                                    </Grid>
                                <Grid item md={9} className={"border-bottom border-dark"}>{localStorage.getItem('loginID')}</Grid>
                                </>
                                )
                            }
                           <Grid item md={3} className={"border-bottom border-dark font-weight-bold"}>
                                UserName:
                            </Grid>
                            <Grid item md={9} className={"border-bottom border-dark"}>{localStorage.getItem('loginName')}</Grid>
                            <Grid item md={3} className={"border-bottom border-dark font-weight-bold"}>
                                Email:
                            </Grid>
                            <Grid item md={9} className={"border-bottom border-dark"}>{localStorage.getItem('loginEmail')}</Grid>
                            {
                                localStorage.getItem('loginPassword') && (
                                    <>
                                        <Grid item md={3} className={"border-bottom border-dark font-weight-bold"}>
                                            Password:
                                        </Grid>
                                        <Grid item md={9} className={"border-bottom border-dark"}>{localStorage.getItem('loginPassword')}</Grid>

                                    </>
                                )
                            }
                            {
                                localStorage.getItem('loginDate') && (
                                    <>
                                        <Grid item md={3} className={"font-weight-bold"}>
                                            Date:
                                        </Grid>
                                        <Grid item md={9}>{localStorage.getItem('loginDate')}</Grid>

                                    </>
                                )

                            }
                          </Grid>
                    </Grid>
                    <Grid item md={2}>
                        {/*<img src={img1} alt={"photo"} width={"100%"} className={"img-thumb"}/>*/}
                        <img src={localStorage.getItem('loginProfile') ?? img1} alt={"img"} width={"100%"} className={"img-thumb"}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}
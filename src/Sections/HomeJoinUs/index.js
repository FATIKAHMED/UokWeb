import { Box, Button, Container, Divider, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { BsArrowRight } from 'react-icons/bs'

import React from 'react'

const useStyles = makeStyles((theme) => ({
    sectionJoinUs: {
        "& .MuiOutlinedInput-input, &.MuiOutlinedInput-root, & .MuiButton-root  ": {
            fontFamily: theme.typography.Poppins,

        },
        padding: "5rem 0",
        marginBottom: "1rem",
        "& .communityWrapper": {
            margin: "0 auto",
            boxShadow: "5px 15px 45px rgba(0, 0, 0, 0.18)",
            borderRadius: "12px",
            padding: "5rem 3rem",
            [theme.breakpoints.down("768")]:{
                padding: "3rem 2rem",
                paddingTop:"3rem",
            },
            [theme.breakpoints.down("600")]:{
                padding: "3rem 2rem",                
            },
            [theme.breakpoints.down("400")]:{
                padding: "2rem 1rem",                
            },
            "& .titleBox": {
                maxWidth: "900px",
                margin: "0 auto",
                display: "flex",
                gap: '1rem',
                "& .title": {
                    margin: "0",
                    marginBottom: ".5rem",
                    fontSize: "3rem",
                    fontWeight: 900,
                    fontFamily: theme.typography.Poppins,
                    color: theme.palette.blue2,
                    textTransform: "uppercase",
                    [theme.breakpoints.down("768")]:{
                        fontSize: "2.5rem",
                    },
                    [theme.breakpoints.down("600")]:{
                        fontSize: "2rem",
                    },
                    [theme.breakpoints.down("500")]:{
                        fontSize: "1.4rem",
                        lineHeight:"2rem",
                    },
                },

                "& .line": {
                    "borderWidth": "5px",
                    "flex": "1",
                    "border": "0",
                    "borderTop": "8px solid #292F75",
                    "position": "relative",
                    "left": "0px",
                    "top": "32px",
                    [theme.breakpoints.down("768")]:{
                        "top": "25px",
                    },
                    [theme.breakpoints.down("600")]:{
                        "display": "none",
                    },                    
                    
                },

            },

            "& .emailBox": {
                margin: "0 auto",
                maxWidth: "900px",
                "& .innerBox": {
                    "display": "flex",
                    "maxWidth": "900px",
                    "alignItems": "center",
                    "width": "100%",
                    "gap": "1rem",
                    [theme.breakpoints.down("600")]:{
                      flexDirection:"column"
                    },
                },
                "& .emailText": {
                    margin: 0,
                    "& .MuiOutlinedInput-root": {
                        height: 62,
                        borderRadius: "12px",
                        width:"100%",
                        [theme.breakpoints.down("600")]:{
                            height: 50,
                        },
                    },
                },
                "& .ctaBtn": {
                    display: 'flex',
                    alignItems: "center",
                    gap: ".5rem",
                    textTransform: "capitalize",
                    // width: 240,
                    width: "100%",
                    height: 62,
                    minWidth: "max-content",
                    borderRadius: "8px",
                    backgroundColor: theme.palette.blue2,
                    fontWeight: "bold",
                    maxWidth:"220px",
                    [theme.breakpoints.down("768")]:{
                        maxWidth:"190px",                    
                        "& svg": {
                            display:"none"
                        }
                    },
                    [theme.breakpoints.down("600")]:{
                        maxWidth:"172px",    
                        height:50,                
                    },
                },


            },
        },
    }
}))
const HomeJoinUs = () => {
    const classes = useStyles()

    const handleSubmit = () => { }
    return (
        <section className={classes.sectionJoinUs}>

            <Container>
                <Box className='communityWrapper'>

                    <Box className='titleBox'>
                        <h2 className='title'>Join the Community</h2>
                        <Divider className="line" />
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} className={"emailBox"}>
                        <Box component="form" onSubmit={handleSubmit} className={"innerBox"}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder="Enter your Email Address"
                                name="email"
                                style={{ background: "transparent" }}
                                InputLabelProps={{ shrink: false }}
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                // error={errors?.email.length > 0 && true}
                                // disabled={loading}
                                color="info"
                                className='emailText'
                            />
                            <Button variant="contained" className='ctaBtn'>
                                <span>Subscribe Now</span>
                                <BsArrowRight size={"1.5rem"} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default HomeJoinUs
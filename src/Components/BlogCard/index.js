import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    blogPost: {
        maxWidth:"370px",
        margin:"0 auto",
        display:"block",
        "& a": {
            textDecoration: "none",
            // color: theme.palette.black
            color: "#000",
        },
        "& .blogImg": {
            width: "100%",
            height: "15rem",
            // height: "12rem",
            "& img": {
                borderRadius: "20px",
                height: "100%",
                imageRendering: "-webkit-optimize-contrast",
                // "boxShadow": "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.017),\n  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.024),\n  12.5px 12.5px 10px rgba(0, 0, 0, 0.03),\n  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.036),\n  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.043),\n  100px 100px 80px rgba(0, 0, 0, 0.06)"
            },

        },
        "& .blogDesc": {
            "& .title": {
                // fontFamily: theme.typography.MazzardH,
                fontFamily: theme.typography.Poppins,
                ////fontSize: "1.5rem",
                fontSize: "1.9rem",
                marginTop: "1rem",
                marginBottom: "0",
                color: "#000",
                lineHeight:1.25,
                "width": "auto",
                "display": "-webkit-box",
                "overflow": "hidden",
                "whiteSpace": "pre-wrap",
                "textOverflow": "ellipsis",
                "WebkitLineClamp": "2",
                "WebkitBoxOrient": "vertical",
                [theme.breakpoints.down("600")]: {
                    fontSize: "2rem",
                },
            },
            "& .desc": {
                fontFamily: theme.typography.Poppins,
                fontSize: "0.75rem",
                lineHeight: "1.2rem",
                fontWeight: 400,
                //// lineHeight: "1rem",
                "width": "auto",
                "display": "-webkit-box",
                "overflow": "hidden",
                "whiteSpace": "pre-wrap",
                "textOverflow": "ellipsis",
                "WebkitLineClamp": "6",
                "WebkitBoxOrient": "vertical",
                [theme.breakpoints.down("600")]: {
                    fontSize: ".9rem",
                    lineHeight:"1.1rem"
                },
            },
        },
    }

}))

const BlogCard = ({ src, title, desc, link }) => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.blogPost}>
            <Link to={link}>
                <Box component="div" className="blogImg">
                    <img src={src} alt="blog image" width={"100%"} height="100%" />
                </Box>
                <Box component="div" className={"blogDesc"}>
                    <h2 className='title'>{title}</h2>
                    <h2 className='desc'>{desc}</h2>
                </Box>

            </Link>
        </Box>
    )
}

export default BlogCard
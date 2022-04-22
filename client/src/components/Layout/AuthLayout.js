import React from 'react'
import {
    Box,
    Grid,
    Typography,
  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Bubble } from "../../assets/bubble.svg";
import BackgroundImage from "../../assets/bg-img.png";

const useStyles = makeStyles(() => ({
    root: {
        height: "100vh",
    },
    background: {
        backgroundImage: `linear-gradient(180deg, rgb(58, 141, 255, .85) 0%, rgb(134, 185, 255, .85) 100%), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        mixBlendMode: "normal",
        paddingTop: '32.5vh',
        gap: '2rem'
    },
    backgroundText: {
        fontSize: '1.625rem',
        color: '#fff',
        textAlign: 'center',
        width: '75%'
    },
}));

const AuthLayout = ({children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="grid" gridTemplateColumns="1fr 2fr">
        <Grid className={classes.background} container direction="column" alignItems='center'>
            <Bubble />
            <Typography className={classes.backgroundText}>
                Converse with anyone with any language
            </Typography>
        </Grid>
        {children}
    </Box>
  )
}

export default AuthLayout
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
        "@media (max-width: 768px)": {
            gridTemplateColumns: '1fr',
          }
    },
    background: {
        backgroundImage: `linear-gradient(180deg, rgb(58, 141, 255, .85) 0%, rgb(134, 185, 255, .85) 100%), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        mixBlendMode: "normal",
        paddingTop: '32.5vh',
        gap: '2rem',
        "@media (max-width: 768px)": {
            display: 'none'
          }
    },
    backgroundText: {
        fontSize: '1.625rem',
        color: '#fff',
        textAlign: 'center',
        width: '75%'
    },
    contentGrid: {
      padding: "2rem 3rem",
      "@media (max-width: 768px)": {
        padding: "2rem 2rem",
      },
    }
}));

const AuthLayout = ({children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="grid" gridTemplateColumns="4.2fr 5.8fr">
        <Grid className={classes.background} container direction="column" alignItems='center'>
            <Bubble />
            <Typography className={classes.backgroundText}>
                Converse with anyone with any language
            </Typography>
        </Grid>
        <Grid className={classes.contentGrid} container direction="column" alignItems="center">
          {children}
        </Grid>
    </Box>
  )
}

export default AuthLayout
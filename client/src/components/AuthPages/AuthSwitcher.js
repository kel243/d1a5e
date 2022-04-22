import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    authSwitcher: {
      gap: "3rem",
      "@media (max-width: 768px)": {
        gap: "2rem",
      },
      "@media (max-width: 600px)": {
        gap: "1rem",
      }
    },
    greyText: {
      fontSize: theme.typography.fontSize,
      color: theme.palette.secondary.main
    },
    linkButton: {
      background: "#FFFFFF",
      boxShadow: "0px 5px 8px rgb(74 106 149 / 20%)",
      borderRadius: "5px",
      textDecoration: "none",
      minWidth: '100px',
      fontSize: theme.typography.fontSize,
      color: theme.palette.primary.main,
      padding: '1rem 3.25rem',
      "@media (max-width: 768px)": {
        padding: '1rem 1.25rem',
      },
      "@media (max-width: 600px)": {
        fontSize: '12px'
      }
    },
    linkText: {
      textDecoration: "none",
    },
  }));


const AuthSwitcher = ({heading, buttonText, url}) => {
    const classes = useStyles();

  return (
    <Grid className={classes.authSwitcher} container item alignItems='center' justifyContent='flex-end'>
        <Typography className={classes.greyText}>{heading}</Typography>
        <Link href={url} to={url} className={classes.linkText}>
          <Button className={classes.linkButton}>{buttonText}</Button>
        </Link>
      </Grid>
  )
}

export default AuthSwitcher

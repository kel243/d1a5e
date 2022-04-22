import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import AuthInput from "./AuthInput";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "75%",
        maxWidth: "23.75rem",
        marginTop: "15vh"
    },
    formGrid: {
        gap: "1rem",
    },
    headingText: {
        textAlign: "left",
        fontSize: "26px",
        fontWeight: "600",
        width: "100%",
        marginBottom: "1rem",
        "@media (max-width: 600px)": {
            fontSize: "22px",
          }
    },
    formButton: {
        fontSize: "16px",
        background: theme.palette.primary.main,
        color: "#fff",
        padding: ".75rem 0",
        width: "10rem",
        marginTop: "2rem",
    },
}));

const AuthForm = ({ submitHandler, headingText, buttonText, inputs }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={submitHandler}>
            <Grid className={classes.formGrid} container direction="column" alignItems="center">
                <Typography className={classes.headingText} component="h1">
                    {headingText}
                </Typography>
                {inputs.map((input) => (
                    <AuthInput
                        label={input.label}
                        name={input.name}
                        type={input.name}
                        required={input.required}
                        forgotPassword={input.forgotPassword}
                    />
                ))}
                <Button className={classes.formButton} type="submit" variant="contained" size="large">
                    {buttonText}
                </Button>
            </Grid>
        </form>
    );
};

export default AuthForm;

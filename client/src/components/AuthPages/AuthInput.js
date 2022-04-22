import { Button, FormControl, FormHelperText, FormLabel, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width: "100%",
    },
    forgotButton: {
        position: "absolute",
        right: "5px",
        bottom: "1px",
        color: theme.palette.primary.main,
        "&:hover": {
            background: "transparent",
        },
    },
}));

const AuthInput = ({ label, name, type, required, forgotPassword, error }) => {
    const classes = useStyles();

    return (
        <FormControl margin="normal" className={classes.fullWidth} error={!!error}>
            <FormLabel>{label}</FormLabel>
            <TextField aria-label={name} name={name} type={type} required={required} />
            {forgotPassword ? <Button className={classes.forgotButton}>Forgot?</Button> : ""}
            {error ? <FormHelperText>{error}</FormHelperText> : ""}
        </FormControl>
    );
};

export default AuthInput;

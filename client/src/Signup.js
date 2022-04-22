import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import AuthLayout from './components/Layout/AuthLayout';
import useStyles from "./components/Layout/AuthPageStyles";

const Signup = ({ user, register }) => {
  const history = useHistory();

  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <AuthLayout>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid className={classes.authSwitcher} container item alignItems='center' justifyContent='flex-end'>
          <Typography className={classes.greyText}>Already have an account?</Typography>
          <Link href="/login" to="/login" className={classes.linkText}>
            <Button className={classes.linkButton}>Login</Button>
          </Link>
        </Grid>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid className={classes.formGrid} container direction='column' alignItems='center'>
            <Typography className={classes.headingText} component="h1">Create an account.</Typography>
            <FormControl margin="normal" className={classes.fullWidth}>
              <FormLabel>Username</FormLabel>
              <TextField
                aria-label="username"
                name="username"
                type="text"
                required
              />
            </FormControl>
            <FormControl margin="normal" className={classes.fullWidth}>
              <FormLabel>E-mail address</FormLabel>
              <TextField
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
            <FormControl margin="normal" error={!!formErrorMessage.confirmPassword} className={classes.fullWidth}>
              <FormLabel>Password</FormLabel>
              <TextField
                aria-label="password"
                type="password"
                inputProps={{ minLength: 6 }}
                required
                name="password"
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal" error={!!formErrorMessage.confirmPassword} className={classes.fullWidth}>
              <FormLabel>Confirm Password</FormLabel>
              <TextField
                aria-label="confirm password"
                type="password"
                inputProps={{ minLength: 6 }}
                required
                name="confirmPassword"
              />
              <FormHelperText className={classes.fullWidth}>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <Button className={classes.formButton} type="submit" variant="contained" size="large">
              Create
            </Button>
          </Grid>
        </form>
      </Grid>
    </AuthLayout>
  );
};

export default Signup;

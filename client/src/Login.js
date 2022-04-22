import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormLabel,
} from '@material-ui/core';
import AuthLayout from './components/Layout/AuthLayout';
import useStyles from "./components/Layout/AuthPageStyles";

const Login = ({ user, login }) => {
  const history = useHistory();

  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <AuthLayout>
      <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid className={classes.authSwitcher} container item alignItems='center' justifyContent='flex-end'>
          <Typography className={classes.greyText}>Don't have an account?</Typography>
          <Link href="/register" to="/register" className={classes.linkText}>
            <Button className={classes.linkButton}>Create Account</Button>
          </Link>
        </Grid>
        <form className={classes.form} onSubmit={handleLogin}>
        <Grid className={classes.formGrid} container direction='column' alignItems='center'>
            <Typography className={classes.headingText} component="h1">Welcome back!</Typography>
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
              <FormLabel>Password</FormLabel>
              <TextField
                aria-label="password"
                type="password"
                name="password"
                required
              />
              <Button className={classes.forgotButton}>Forgot?</Button>
            </FormControl>
            <Button className={classes.formButton} type="submit" variant="contained" size="large">
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    </AuthLayout>
  );
};

export default Login;

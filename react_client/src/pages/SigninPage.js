import React from 'react';
// custom link
import CustomLink from '../components/CustomLink';
// Material UI components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">
        CovidEZ
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInPage(props) {
  const classes = useStyles();

  const handleSubmit = (e) => {
    console.log("BLAH")
    e.preventDefault();
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  // 100vh, so height of browser page is filled with background
  return (
    <Container component="main" maxWidth="xs" style={{ height: "100vh" }}>
      <CssBaseline />
      <Paper className={classes.wrapper}>
        <div className={classes.formContainer}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={"Email"}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={"Password"}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={"Remember Me"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {"Sign In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <CustomLink ariaLabel={`Link to forgot password page`} to={'/forgotpassword'}>
                  <Typography variant="body2">Forgot Password</Typography>
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink ariaLabel={`Link to register page`} to={'/register'}>
                  <Typography variant="body2">No Account?</Typography>
                </CustomLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
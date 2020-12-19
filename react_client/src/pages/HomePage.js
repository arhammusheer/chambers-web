import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Paper, Typography } from '@material-ui/core';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from '../constants/img/restaurant-chocolat.jpg'
// Custom component & data
import CustomLink from '../components/CustomLink'
// NPM Components
import ReactTypingEffect from 'react-typing-effect'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(25, 0, 30),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
  primaryButton: {
  },
  landingRoot: {
    height: theme.spacing(93),
    objectFit: 'cover'
  }
}));

export default function HomePage(props) {
  const classes = useStyles();
  const { id } = props;
  const [loginArrowShown, setLoginArrowShown] = useState(false);
  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const hololiveButton = loginArrowShown ? <>{"Log In"} <ArrowRightAltIcon /></> : <>{"Log In"}</>
  const registerButton = registerArrowShown ? <>{"Register"} <ArrowRightAltIcon /></> : <>{"Register"}</>

  return (
    <div id={id} className={classes.heroContent} style={{ backgroundImage: `url(${MyBackgroundImg})`, backgroundSize: 'cover'}}>
      <Container maxWidth="sm">
        <Paper>
          <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            Keep yourself safe.
          </Typography>
          <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
            <ReactTypingEffect
              className="typingeffect"
              text={['Covid-19 Made Easy']}
            />
          </Typography>
          <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            Check how crowded your favorite restaurants are
          </Typography>
          <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            AND reserve a spot
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <CustomLink
                  ariaLabel="Hololive Link"
                  to="/signin"
                >
                  <Button
                    size="large"
                    className={classes.primaryButton}
                    variant="outlined"
                    color="primary"
                    onMouseEnter={() => setLoginArrowShown(true)}
                    onMouseLeave={() => setLoginArrowShown(false)}
                  >
                    {hololiveButton}
                  </Button>
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink
                  ariaLabel="Hololive Link"
                  to="/register"
                >
                  <Button
                    size="large"
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setRegisterArrowShown(true)}
                    onMouseLeave={() => setRegisterArrowShown(false)}
                  >
                    {registerButton}
                  </Button>
                </CustomLink>
              </Grid>
            </Grid>
          </div>
        </Paper>  
      </Container>
    </div>
  );
}
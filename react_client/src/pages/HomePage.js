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
import Carousel from '../components/Carousel';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(15, 0, 30),
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
          <Typography variant="h5" align="center" color="textPrimary">
          𝓢𝓸𝓬𝓲𝓪𝓵 𝓭𝓲𝓼𝓽𝓪𝓷𝓬𝓲𝓷𝓰 𝓶𝓪𝓭𝓮 𝓮𝓪𝓼𝔂.
          </Typography>
          <Container style={{marginTop: 5}}>
            <Carousel />
          </Container>
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
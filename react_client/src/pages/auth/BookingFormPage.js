import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Fab, Paper } from '@material-ui/core';
// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

  
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paperPadding: {
    padding: theme.spacing(5, 0, 5)
  },
  media: {
    maxHeight: 550,
    width: '100%',
    objectFit: 'cover'
  },
  absoluteTopLeft: {
    position: 'absolute',
    left: 30,
    top: 100 // account for navbar
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': { // add padding between elements
      margin: 5
    },
  }
}));


export default function MemeDetailsPage(props) {
  const classes = useStyles();
  const { bookingData } = props;
  // memeID from URL
  let { bookingID } = useParams();
  const booking = bookingData.find(meme => meme.id === bookingID);
  const { id } = booking;

  const handleBackClick = () => {
    window.history.back()
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, []);
  
  return (
    <Container id={id} style={{paddingTop: 20}}>
      <Paper className={classes.paperPadding}>
        <Fab color="primary" aria-label="add" className={classes.absoluteTopLeft} onClick={handleBackClick}>
          <ArrowBackIcon />
        </Fab>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
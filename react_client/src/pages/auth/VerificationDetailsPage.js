import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Fab, Paper } from '@material-ui/core';
// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// (temp) QR Code asset
import QRCodeImg from '../../constants/img/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png';

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
  const { verificationList } = props;
  // memeID from URL
  let { verificationID } = useParams();
  const verification = verificationList.find(meme => meme.id === verificationID);
  const { id } = verification;

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
        <Grid container>
          <Grid item xs={12} sm={8}>
            <img src={QRCodeImg} alt="QR code from internet" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
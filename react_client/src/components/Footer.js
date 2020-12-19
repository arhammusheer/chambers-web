import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// NPM Components
import ReactTypingEffect from 'react-typing-effect'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        HoloMemes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useFooterStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(40, 20, 5),
    textAlign: "center"
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function Footer(props) {
  const classes = useFooterStyles();
  const { iconLabelList } = props;
  return (
    <footer className={classes.footer}>
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
      <ReactTypingEffect
        className="typingeffect"
        text={['Covid-19 Made EZ']}
      />
    </Typography>
      <Typography variant="h6" gutterBottom>
        Contact Info
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Disclaimer: This is a fanmade website and is not affiliated with Hololive.
      </Typography>      
      <Copyright />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
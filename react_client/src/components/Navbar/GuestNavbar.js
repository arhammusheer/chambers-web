import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// custom React Router link
import CustomLink from '../CustomLink';
// Navigation Menu (navbar && sidebar)
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Button, Typography } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import BookIcon from '@material-ui/icons/Book';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 50,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
    

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const { logo } = props;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CustomLink ariaLabel={`Link to favorites page`} to={'/verification'}>
          <Button>
            <BookIcon />
            <Typography variant="button" display="block" gutterBottom>
              Booking
            </Typography>
          </Button>
        </CustomLink>
      </MenuItem>
      <MenuItem>
        <CustomLink ariaLabel={`Link to favorites page`} to={'/verification'}>
          <Button>
            <ThumbUpIcon />
            <Typography variant="button" display="block" gutterBottom>
              Verification
            </Typography>
          </Button>
        </CustomLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>  
          <CustomLink to={"/"}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </IconButton>
          </CustomLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CustomLink ariaLabel={`Link to favorites page`} to={'/booking'}>
              <Button>
                <Typography variant="button" display="block" gutterBottom>
                  Booking
                </Typography>
              </Button>
            </CustomLink>
            <CustomLink ariaLabel={`Link to favorites page`} to={'/verification'}>
              <Button>
                <Typography variant="button" display="block" gutterBottom>
                  Verification
                </Typography>
              </Button>
            </CustomLink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

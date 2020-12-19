import React from 'react'
import { HashRouter, Route } from "react-router-dom"; // client-side routing
// Custom components
import GuestNavbar from './components/Navbar/GuestNavbar';
import AuthNavbar from './components/Navbar/AuthNavbar';
import Footer from './components/Footer';
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import PageviewIcon from '@material-ui/icons/Pageview';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HistoryIcon from '@material-ui/icons/History';
import PeopleIcon from '@material-ui/icons/People';
// pages
import HomePage from './pages/HomePage';
import UserPage from './pages/user/UserPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// logo
import logo from './logo.svg';
import './App.css';

function App() {
  const userSignedIn = false;
  
  if (userSignedIn) {
    const navMenuRouteData = [
      { text: 'navMenu.home', link: '/', iconFunc: () => { return <HomeIcon /> } },
      { text: 'navMenu.browse', link: "/browse", iconFunc: () => { return <PageviewIcon /> } },
      { text: 'navMenu.profile', link: "/profile", iconFunc: () => { return <AccountBoxIcon /> } },
      { text: 'navMenu.history', link: "/history", iconFunc: () => { return <HistoryIcon /> } },
      { text: 'navMenu.social', link: "/social", iconFunc: () => { return <PeopleIcon /> } },
    ]
  
    return (
      <HashRouter initialIndex={0}>
        <div style={{backgroundColor: "#DAE3E7"}}>
          <AuthNavbar routeData={navMenuRouteData} logo={logo} />
          <Route exact path="/" render={(props) => <HomePage {...props} /> } />
          <Route path="/user" render={(props) => <UserPage {...props} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} /> } /> 
          <Footer />
        </div>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter initialIndex={0}>
        <div style={{backgroundColor: "#DAE3E7"}}>
          <GuestNavbar logo={logo} />
          <Route exact path="/" render={(props) => <HomePage {...props} /> } />
          <Route path="/user" render={(props) => <UserPage {...props} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} /> } /> 
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;

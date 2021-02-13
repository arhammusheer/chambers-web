import React, { useState, useEffect } from 'react'
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
// pages
import HomePage from './pages/HomePage';
import BookingMapPage from './pages/auth/BookingMapPage';
import BookingFormPage from './pages/auth/BookingFormPage';
import VerificationListPage from './pages/auth/VerificationListPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// logo
import logo from './constants/img/CovidEZ_Logo.png';
import './App.css';

const navMenuRouteData = [
  { text: 'HOME', link: '/', iconFunc: () => { return <HomeIcon /> } },
  { text: 'ABOUT', link: "/about", iconFunc: () => { return <AccountBoxIcon /> } },
  { text: 'PLACES', link: "/profile", iconFunc: () => { return <PageviewIcon /> } },
  { text: 'HISTORY', link: "/history", iconFunc: () => { return <HistoryIcon /> } },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    authenticated: true,
    user: ''
  });
  const [verificationList, setVerificationList] = useState([]);
  const signinCallback = (responseJson) => {
    setIsLoggedIn({
      authenticated: true,
      user: responseJson.user
    });
  }
  /*
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    
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
  });
  */

  return (
    <div>
      {isLoggedIn.authenticated ? 
        <HashRouter initialIndex={0}>
          <div style={{backgroundColor: "#DAE3E7"}}>
            <AuthNavbar routeData={navMenuRouteData} logo={logo} />
            <Route exact path="/" render={(props) => <HomePage {...props} /> } />
            <Route path="/bookingmap" render={(props) => <BookingMapPage {...props} /> } />
            <Route path="/bookingform" render={(props) => <BookingFormPage {...props} /> } />
            <Route path="/verification" render={(props) => <VerificationListPage {...props} verificationList={verificationList} /> } />
            <Footer />
          </div>
        </HashRouter>
        : 
        <HashRouter initialIndex={0}>
          <div style={{backgroundColor: "#DAE3E7"}}>
            <GuestNavbar logo={logo} />
            <Route exact path="/" render={(props) => <HomePage {...props} /> } />
            <Route path="/signin" render={(props) => <SigninPage {...props} signinCallback={signinCallback} /> } />
            <Route path="/register" render={(props) => <RegisterPage {...props} /> } />
            <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} /> } /> 
            <Footer />
          </div>
        </HashRouter>
        }
    </div>
  )
}

export default App;

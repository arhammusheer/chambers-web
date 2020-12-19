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
import BookMapPage from './pages/user/BookMapPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// logo
import logo from './logo.svg';
import './App.css';

const navMenuRouteData = [
  { text: 'HOME', link: '/', iconFunc: () => { return <HomeIcon /> } },
  { text: 'ABOUT', link: "/about", iconFunc: () => { return <AccountBoxIcon /> } },
  { text: 'PLACES', link: "/profile", iconFunc: () => { return <PageviewIcon /> } },
  { text: 'HISTORY', link: "/history", iconFunc: () => { return <HistoryIcon /> } },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  return (
    <div>
      {isLoggedIn ? 
        <HashRouter initialIndex={0}>
          <div style={{backgroundColor: "#DAE3E7"}}>
            <AuthNavbar routeData={navMenuRouteData} logo={logo} />
            <Route exact path="/" render={(props) => <HomePage {...props} /> } />
            <Route path="/bookmap" render={(props) => <BookMapPage {...props} /> } />
            <Footer />
          </div>
        </HashRouter>
        : 
        <HashRouter initialIndex={0}>
          <div style={{backgroundColor: "#DAE3E7"}}>
            <GuestNavbar logo={logo} />
            <Route exact path="/" render={(props) => <HomePage {...props} /> } />
            <Route path="/bookmap" render={(props) => <BookMapPage {...props} /> } />
            <Route path="/signin" render={(props) => <SigninPage {...props} /> } />
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

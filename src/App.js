import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/Signup'
import UserDetails from './components/userDeatils'

function App() {

  const styles = {
    // backgroundImage: "url(https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"
    // backgroundImage: "url(data:image/jpeg;base64,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)",
    backgroundColor: '#635985',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              StayEz
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import ListuserComponent from "./components/verify.component";
import ViewuserComponent from "./components/view.component";
import ApproveuserComponent from "./components/approve.component";
import Form from "./components/form.component";

function App() {
  /*
  const loggedin = "false";

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);*/
  return (<Router>
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}><b>Karnataka Builders and Construction Workers Board </b></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              
                <li className="nav-item">
                  <Link className="navbar-brand" to={"/sign-in"}><b>Login</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to={"/sign-up"}><b>Sign up</b></Link>
                </li>
               
              {/*
              {
              (loggedin=="true") && (
              <li className="nav-item">
                <Link to={"/logout"} className="nav-link">
                  Logout
                </Link>
              </li>
            )}*/ }
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/'  component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/verify" component={ListuserComponent} />
            <Route path="/approve" component={ApproveuserComponent} />
            <Route path="/view/:id" component={ViewuserComponent}/> 
            <Route path="/form" component={Form} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
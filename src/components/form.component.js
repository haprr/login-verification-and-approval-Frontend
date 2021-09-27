import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Form extends Component {
    
    render() {
        const loggingIn  = "true";
        return (
                <div class="container4">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="navbar-brand" to={"/logout"}><b>Logout</b></Link>
                            </li>
                    </ul>
                    </div>
                    </nav> 
                    <h1><b><p>Benifit Form</p></b></h1>
                </div>

            
        );
    }
}
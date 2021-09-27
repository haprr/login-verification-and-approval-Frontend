import React, { Component } from 'react'
import Userservice from '../services/Userservice'
import { Button, Container, Form, FormGroup, Input, Label, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Viewforapprover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {},
            username:'',
            emailid:''
        }
    }

    componentDidMount(){
        Userservice.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="navbar-brand" to={"/logout"}><b>Logout</b></Link>
                            </li>
                    </ul>
                    </div>
                    </nav> 
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View user Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Name </label>
                            <div> { this.state.user.username }</div>
                        </div>
                        
                        <div className = "row">
                            <label> User Email ID </label>
                            <div> { this.state.user.emailid }</div>
                        </div>
                    </div>
                    <FormGroup>
                        
                        <Button color="secondary" tag={Link} to="/approve">Back</Button>
                </FormGroup>
                </div>
            </div>
            
        )
    }
}

export default Viewforapprover
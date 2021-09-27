import React, { Component } from "react";
import Userservice from "../services/Userservice";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            username:'',
            password:'',
            status1:''
        }
        this.myChangeHandler = this.myChangeHandler.bind(this);
        
    }

    componentDidMount(){
        Userservice.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({username: user.username,
                password: user.password,
                status : user.status
            });
            
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        let user = {username: this.state.username,password:this.state.password};
        //let password={password:this.state.password};
       //alert(user.username)
       //alert(password.password)
        Userservice.getUserByname(user.username).then((res=>{
            let u=res.data;
            //alert(u.username)
            //alert(u.password)
           // alert(user.password)
            //alert(u.password, password)
            if(u.status=="ver") 
            {   if (u.password==user.password){
                    const { loggingIn } = "True";
                    this.props.history.push('/verify');
                }
                else{
                    
                    alert("Please verify your username and password");
                    window.location.reload();
                }
            }
            else if(u.status=="app"){
                if (u.password==user.password){
                    this.props.history.push('/approve');
                }
                else{
                    alert("Please verify your username and password");
                    window.location.reload();
                }
                
            }
            else if (u.status=="approved"){
                if (u.password==user.password){
                    this.props.history.push("/form");
                    window.location.reload();
                }
                else{
                    alert("Please verify your username and password");
                }
            }
        }))
    }
    
    myChangeHandler= (event) => {
        this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name] : event.target.value
          })
    }

    

    render() {
        return (
            <div class="b">
            <form class="sup" >
                <h3>Sign In</h3>
                <div class="col-md-12">
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control"  name="username" onChange={this.myChangeHandler} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.myChangeHandler} placeholder="Enter password" />
                </div>
{/*                 
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                
               
                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleLogin}>Login</button>
                </div>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>
            </div>
        );
    }
}
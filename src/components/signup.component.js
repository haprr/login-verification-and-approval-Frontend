import React, { Component } from "react";
import axios from 'axios';
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users:[],
          username: '',
            emailid: '',
            password:'',
            status: ''
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
      }
      myChangeHandler(event){
          this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name] : event.target.value
          })
        }
      componentDidMount(){//method is called after the component is rendered.
          axios.get("http://localhost:8080/api/v1/users")
          .then((res)=>{
            this.setState({
              users:res.data,
              username: '',
            emailid: '',
            password:'',
            status: ''
            })
          });
        }
      
        submit(event,id)
        {
          event.preventDefault();
          alert(`
          Details has been succesfully sent for verification and approval
          `)
            axios.post("http://localhost:8080/api/v1/signup",{
              username: this.state.username,
              emailid: this.state.emailid,
              password:this.state.password,
              status: 'initiate'
            })
            .then((res)=>{
              this.componentDidMount();
            })
            this.formRef.reset();
        }

    render() {
        return (
            <div class ="b">
            <form class="sup" ref={(ref)=>this.formRef=ref} onSubmit={(e)=>this.submit(e)} >
                <h3>Sign Up</h3>
                <div class="col-md-12">
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" name="username" onChange={this.myChangeHandler} placeholder="User name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="emailid" onChange={this.myChangeHandler} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.myChangeHandler} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block"  name="action">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
                </div>
            </form>
            </div>
        );
    }
}
import React, { Component } from 'react'
import Userservice from '../services/Userservice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class ApproveuserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        
        this.deleteuser = this.deleteuser.bind(this);
    }

    deleteuser(id){
        Userservice.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewuser(id){
        this.props.history.push(`/view_a/${id}`);
    }
    
    approveuser(id){
        Userservice.getUserById(id).then((res=>{
                let u=res.data;
                let user={username:u.username,emailid:u.emailid,password:u.password, status:"approved"} 
                Userservice.updateUser(user,u.id);
                alert("The user details has been Approved")
                window.location.reload();
            }))
            
            //window.location.reload();
            
  
    }
    componentDidMount(){
        Userservice.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }
    render() {
        //const loggingIn  = "true";
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
                 <h2 className="text-center">Approver's Board</h2>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> UserName</th>
                                    <th> User Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                      
                                   
                                       {
                                        this.state.users.filter(user => user.status == "verified").map(
                                        user => 
                                    
                                        <tr key = {user.id}>  
                                             <td> {user.username}</td>
                                             <td> {user.emailid}</td>
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteuser(user.id)} className="btn btn-danger">Reject</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewuser(user.id)} className="btn btn-info">View</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.approveuser(user.id)} className="btn btn-info">Approve</button>
                                             </td>
                                        </tr>
                                    )
                                        }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ApproveuserComponent

 {/* //this.state.users.map(
                                       // user => */}
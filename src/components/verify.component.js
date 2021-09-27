import React, { Component } from 'react'
import Userservice from '../services/Userservice'
import { Link } from "react-router-dom";
//import App from './App.js';
const loggedin = "true";
class ListuserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: [],
                status:"verified"
                
        }
        
        this.deleteuser = this.deleteuser.bind(this);
    }

    deleteuser(id){
        Userservice.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewuser(id){
        this.props.history.push(`/view/${id}`);
    }
    verifyuser(id){
        Userservice.getUserById(id).then((res=>{
            let u=res.data;
            
            //alert(u.status)
            //u.status="verified"
            let user={username:u.username,emailid:u.emailid,password:u.password, status:"verified"}
            Userservice.updateUser(user,u.id);
            alert("The details has been verified")
            window.location.reload();
        }))
        
       
        
    }
    componentDidMount(){
        Userservice.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
        // Userservice.getUserById(this.state.id).then((res=>{
        //     let u=res.data;
        //     u.status=this.state.status;
        //     this.setState({ status: this.state.status });
            
        //    // alert(u.this.state.id)
        // }))
        
    }
    render() {
        
        return (
            <div>  
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
                    </div>   
                    <br></br>
                   
        <div><h2 className="text-center">Verifier's Board</h2></div>
                     
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
                                        this.state.users.filter(user => user.status == "initiate").map(
                                        user => 
                                    
                                        <tr key = {user.id}>  
                                             <td> {user.username}</td>
                                             <td> {user.emailid}</td>
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteuser(user.id)} className="btn btn-danger">Reject</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewuser(user.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.verifyuser(user.id)} className="btn btn-info">Verify </button>
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

export default ListuserComponent

 {/* //this.state.users.map(
                                       // user => */}
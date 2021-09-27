import React, { Component } from 'react'
import Userservice from '../services/Userservice'

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
        this.props.history.push(`/view/${id}`);
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
       
        return (
            <div>
                 <h2 className="text-center">users List</h2>
                 
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
import React, { Component } from 'react'
import Userservice from '../services/Userservice'

class ViewuserComponent extends Component {
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
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View user Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> UserName </label>
                            <div> { this.state.user.username }</div>
                        </div>
                        
                        <div className = "row">
                            <label> user Email ID: </label>
                            <div> { this.state.user.emailid }</div>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default ViewuserComponent
import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';

class UserScreen1 extends Component {
    render() {
        const {values} = this.props;
        if(values.loginColor=="primary") {
            return (
                <div>
                    <Login />
                </div>
            )
        }
        else{
            return (
                <div>
                   <Signup />
                </div>
            ) 
        }
        
    }
}

export default UserScreen1

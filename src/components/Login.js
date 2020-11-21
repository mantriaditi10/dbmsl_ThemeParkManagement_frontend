import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export class Login extends Component {
    state = {
        email:"",
        password:""
    }
    
    handleChange = input => e => {
        this.setState({[input]:e.target.value});
    }

    render() {
        return (
            <div>
                <br />
                <h3>Enter Login Details</h3>
                <TextField 
                   id="Email"
                   label="Email" 
                   onChange={this.handleChange('email')}
                />
                <br/><br/>
                <TextField 
                   id="password-input"
                   label="Password" 
                   type="password"
                   onChange={this.handleChange('password')}
                   margin="normal"
                />
                <br/><br/>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        )
    }
}

export default Login

import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

class Signup extends Component {
    state = {
        fname:"",
        lname:"",
        mobile:"",
        city:"",
        state:"",
        country:"",
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
                <h3>Enter your Details for signing up!</h3>
                <TextField 
                   id="fname"
                   label="First Name" 
                   onChange={this.handleChange('fname')}
                   margin="normal"
                   style={styles.textfields}
                />
                <TextField 
                   id="lname"
                   label="Last Name" 
                   onChange={this.handleChange('lname')}
                   margin="normal"
                   style={styles.textfields}
                />
                <br/>
                <TextField 
                   id="mobile"
                   label="Mobile No." 
                   onChange={this.handleChange('mobile')}
                   margin="normal"
                />
                <br/>
                <TextField 
                   id="city"
                   label="City" 
                   onChange={this.handleChange('city')}
                   margin="normal"
                   style={styles.textfields}
                />
                <TextField 
                   id="state"
                   label="State" 
                   onChange={this.handleChange('state')}
                   margin="normal"
                   style={styles.textfields}
                />
                
                <TextField 
                   id="country"
                   label="Country" 
                   onChange={this.handleChange('country')}
                   margin="normal"
                   style={styles.textfields}
                />
                <br/>
                <TextField 
                   id="Email"
                   label="Email" 
                   onChange={this.handleChange('email')}
                   margin="normal"
                />
                <br/>
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

const styles = {
    textfields: {
        margin:10,
    }
}

export default Signup

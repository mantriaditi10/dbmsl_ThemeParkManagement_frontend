import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
            <React.Fragment>
                <Container>
                    <Card>
                        <br/>
                        <CardHeader
                            title="Enter Signup Details:"
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                        />
                        <br />
                        <TextField 
                        id="fname"
                        label="First Name" 
                        variant="outlined"
                        onChange={this.handleChange('fname')}
                        margin="normal"
                        style={styles.textfields}
                        />
                        <TextField 
                        id="lname"
                        label="Last Name" 
                        variant="outlined"
                        onChange={this.handleChange('lname')}
                        margin="normal"
                        style={styles.textfields}
                        />
                        <br/>
                        <TextField 
                        id="mobile"
                        label="Mobile No."
                        variant="outlined" 
                        onChange={this.handleChange('mobile')}
                        margin="normal"
                        />
                        <br/>
                        <TextField 
                        id="city"
                        label="City"
                        variant="outlined" 
                        onChange={this.handleChange('city')}
                        margin="normal"
                        style={styles.textfields}
                        />
                        <TextField 
                        id="state"
                        label="State"
                        variant="outlined" 
                        onChange={this.handleChange('state')}
                        margin="normal"
                        style={styles.textfields}
                        /> 
                        <TextField 
                        id="country"
                        label="Country"
                        variant="outlined" 
                        onChange={this.handleChange('country')}
                        margin="normal"
                        style={styles.textfields}
                        />
                        <br/>
                        <TextField 
                        id="Email"
                        label="Email" 
                        variant="outlined"
                        onChange={this.handleChange('email')}
                        margin="normal"
                        />
                        <br/>
                        <TextField 
                        id="password-input"
                        label="Password" 
                        type="password"
                        variant="outlined"
                        onChange={this.handleChange('password')}
                        margin="normal"
                        />
                        <br/><br/>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                        <br/><br/>
                    </Card>
                    
                </Container>
            </React.Fragment>
        )
    }
}

const styles = {
    textfields: {
        margin:10,
    }
}

export default Signup

import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
            <React.Fragment>
                <Container>
                    <Card>
                        <CardHeader
                            title="Enter Login Details:"
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                        />
                        <br />
                        <TextField 
                            id="Email"
                            label="Email" 
                            variant="outlined"
                            onChange={this.handleChange('email')}
                        />
                        <br/><br/>
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

export default Login

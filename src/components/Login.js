import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';

export class Login extends Component {

    constructor(props){
        super(props)

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    state = {
        email:"",
        password:"",
        label:""
    }
    
    handleChange = input => e => {
        this.setState({[input]:e.target.value});
    }

    handleSubmit(){
        axios.post('/users/login',{
            email:this.state.email,
            password:this.state.password
        })
        .then((res)=>{
            if(res.data.success===true){
                console.log(res.data.user)
                localStorage.setItem('user',res.data.user)
            }
            if(res.data.success===false){
                console.log(res.data.err)
                this.setState({label:res.data.err})
            }
            
        })
        .catch(err=>{
            console.log(err)
        })

        
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
                        <p style={{color:"red"}}>{this.state.label}</p>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
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

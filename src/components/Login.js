import React, { useState,useEffect } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';
import {useHistory} from 'react-router'

function Login (props){
    const [email,setEmail] = useState("");
    const [password ,setPassword] = useState("")
    const [label,setLabel] = useState("");
    const history = useHistory()
    
    

    function handleSubmit(){
        axios.post('/users/login',{
            email:email,
            password:password
        })
        .then((res)=>{
            if(res.data.success===true){
                console.log(res.data.user.name.fname)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                // localStorage.setItem('userfname',res.data.user.name.fname)
                // localStorage.setItem('userlname',res.data.user.name.lname)
                // localStorage.setItem('userid',res.data.user._id)
                setLabel("")
                history.push('/home')
                
            }
            if(res.data.success===false){
                console.log(res.data.err)
                setLabel(res.data.err)
            }
            
        })
        .catch(err=>{
            console.log(err)
        })

        
    }

    
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/><br/>
                        <TextField 
                            id="password-input"
                            label="Password" 
                            type="password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                        />
                        <br/><br/>
                        <p style={{color:"red"}}>{label}</p>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <br/><br/>
                    </Card>
                </Container>
            </React.Fragment>
        )
    
}

export default Login

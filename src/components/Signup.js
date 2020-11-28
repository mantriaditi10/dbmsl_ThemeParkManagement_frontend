import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';
import {useHistory} from 'react-router'

function Signup() {

    
       const [fname,setfname]=useState("")
       const [lname, setlname] = useState("")
       const [mobile, setmobile] = useState(0)
       const [city, setcity] = useState("")
       const [state, setstate] = useState("")
       const [country, setcountry] = useState("")
       const [email, setemail] = useState("")
       const [password, setpassword] = useState("")
       const [label, setlabel] = useState("")
       const history=useHistory()
    
    
    

    function handleSubmit(){
        axios.post('/users/signin',{
            
            fname:fname,
            lname:lname,
            city:city,
            state:state,
            country:country,
            email:email,
            password:password,
            mobileNo:mobile
        })
        .then((res)=>{
            if(res.data.success===true){
                console.log(res.data.user)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                setlabel("")
                history.push('/login_signup')
            }
            if(res.data.success===false){
                console.log(res.data.err)
                setlabel(res.data.err)
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
                            onChange={(e) => setfname(e.target.value)}
                            margin="normal"
                            style={styles.textfields}
                        />
                        <TextField 
                            id="lname"
                            label="Last Name" 
                            variant="outlined"
                            onChange={(e) => setlname(e.target.value)}
                            margin="normal"
                            style={styles.textfields}
                        />
                        <br/>
                        <TextField 
                            id="mobile"
                            label="Mobile No."
                            variant="outlined" 
                            onChange={(e) => setmobile(e.target.value)}
                            margin="normal"
                        />
                        <br/>
                        <TextField 
                            id="city"
                            label="City"
                            variant="outlined" 
                            onChange={(e) => setcity(e.target.value)}
                            margin="normal"
                            style={styles.textfields}
                        />
                        <TextField 
                            id="state"
                            label="State"
                            variant="outlined" 
                            onChange={(e) => setstate(e.target.value)}
                            margin="normal"
                            style={styles.textfields}
                        /> 
                        <TextField 
                            id="country"
                            label="Country"
                            variant="outlined" 
                            onChange={(e) => setcountry(e.target.value)}
                            margin="normal"
                            style={styles.textfields}
                        />
                        <br/>
                        <TextField 
                            id="Email"
                            label="Email" 
                            variant="outlined"
                            onChange={(e) => setemail(e.target.value)}
                            margin="normal"
                        />
                        <br/>
                        <TextField 
                            id="password-input"
                            label="Password" 
                            type="password"
                            variant="outlined"
                            onChange={(e) => setpassword(e.target.value)}
                            margin="normal"
                        />
                        {/* <br/><br/> */}
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

const styles = {
    textfields: {
        margin:10,
    }
}

export default Signup

import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UserScreen1 from "./UserScreen1";

class UserScreen extends Component {
    state = {
        loginColor: "primary",
        signupColor: "default"
    }

    loginClicked = (e) => {
        e.preventDefault();
        this.setState({
            loginColor: "primary",
            signupColor:"default"
        })
    }

    signupClicked = (e) => {
        e.preventDefault();
        this.setState({
            loginColor: "default",
            signupColor:"primary"
        })
    }

    render() {
        const {loginColor, signupColor} = this.state; 
        const values = {loginColor, signupColor};
        return (
            <div style={styles.root}>
                <AppBar style={styles.appbar} position="static">
                    <Typography variant="h5" color="inherit" style={styles.title}>
                       Amusement Park
                    </Typography>
                </AppBar>
                <br/>
                <Button onClick={this.loginClicked} variant="contained" color={loginColor}>
                    Login
                </Button>
                <Button onClick={this.signupClicked} variant="contained" color={signupColor}>
                    Signup
                </Button>
                <UserScreen1 values={values}/>
            </div>
        )
    }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
      height:46,
  },
  title: {
    flexGrow: 1,
    padding: 8,
  },
};

export default UserScreen


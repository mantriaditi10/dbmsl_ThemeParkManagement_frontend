import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from'react-router'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import {saveAs} from 'file-saver'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar1() {
  const classes = useStyles();
  const user =JSON.parse(localStorage.getItem("user"))
  // console.log((user))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(selectedIndex);
  };

  function handleLogout(){
      localStorage.removeItem("user")
      history.push('/')
  }

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit" href="/home">HOME</Button>
            <Button className={classes.button} color="inherit">ABOUT US</Button>
            <Button className={classes.button} color="inherit" href="/contactus">CONTACT US</Button>
            {/* <Typography align="right" className={classes.title}>
              <Button className={classes.button} color="inherit" onClick={handleLogout}>LOGOUT</Button>
                {user.name.fname.charAt(0).toUpperCase()+user.name.fname.slice(1)} {user.name.lname.charAt(0).toUpperCase()+user.name.lname.slice(1)}
            </Typography> */}
            <Typography align="right" className={classes.title}>
                <Button aria-controls="simple-menu" className={classes.button} color="inherit" aria-haspopup="true" onClick={handleClick}>
                  {user.name.fname.charAt(0).toUpperCase()+user.name.fname.slice(1)} {user.name.lname.charAt(0).toUpperCase()+user.name.lname.slice(1)}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                  {/* <Button><MenuItem onClick={()=>setSelectedIndex("Ticket")} href="/ticket">My Ticket</MenuItem></Button> */}
                <MenuItem onClick={()=>setSelectedIndex("Ticket")}><Button  href="/ticket">My Ticket</Button></MenuItem>
                <MenuItem onClick={()=>setSelectedIndex("Logout")}><Button onClick={handleLogout}>Logout</Button></MenuItem>
                </Menu>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

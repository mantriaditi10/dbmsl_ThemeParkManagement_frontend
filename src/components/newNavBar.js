import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(selectedIndex);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit">HOME</Button>

            <Button className={classes.button} color="inherit">ABOUT US</Button>

            <Button className={classes.button} color="inherit">CONTACT US</Button>
            <Typography align="right" className={classes.title}>
                <Button aria-controls="simple-menu" className={classes.button} color="inherit" aria-haspopup="true" onClick={handleClick}>
                    username
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                <MenuItem onClick={()=>setSelectedIndex("Ticket")}>My Ticket</MenuItem>
                <MenuItem onClick={()=>setSelectedIndex("Logout")}>Logout</MenuItem>
                </Menu>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

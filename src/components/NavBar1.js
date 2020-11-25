import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit">HOME</Button>
            <Button className={classes.button} color="inherit">ABOUT US</Button>
            <Button className={classes.button} color="inherit">CONTACT US</Button>
            <Typography align="right" className={classes.title}>
                username
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
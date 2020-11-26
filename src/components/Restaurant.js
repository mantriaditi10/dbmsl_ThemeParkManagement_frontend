import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NavBar1 from './NavBar1';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 2),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    cardHeader: {
        backgroundColor:'#3480eb'
      },
  }));

const Dishes = [
    {
        id:1,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:2,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:3,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:4,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:5,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:6,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:7,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:8,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
    {
        id:9,
        Name:'Cheese Burger',
        Price: 'Rs.150'
    },
];

const RestoDetails = {
        Name: 'Zodiac Bistro',
        Img_src: '"https://source.unsplash.com/random"',
        Cuisine: 'American',
        Table_Availability:22,
        Service:{1:'Veg',2:'Non-Veg',3:'Alcohol'},
        Description:'Indulge in ' + 
        'American comfort food to your heart’s content with the likes of fries,' +
         'fried, classic burgers and more',
        Timings:'12pm - 8pm',
}

export default function Blog() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <NavBar1/>  
      <br/><br/>
      <Container maxWidth="lg" component="main">
            <Grid container spacing={4}>
                <Grid item xs={6} >
                    <Card>
                        <CardHeader
                            title={<b><i>{RestoDetails.Name}</i></b>}
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                        />
                        <CardContent>
                            <Typography component="h4" align="left" variant="h6" color="textPrimary">
                                {<b><i>Cuisine</i></b>} : {RestoDetails.Cuisine}<br/>
                                {<b><i>Description</i></b>} : {RestoDetails.Description}<br/>
                                {<b><i>Timing</i></b>} : {<AccessTimeIcon fontSize="small" />} {RestoDetails.Timings} <br/>
                                {<b><i>Service</i></b>} : 
                                    {<FiberManualRecordIcon style={{color:'green'}}/>}{RestoDetails.Service[1]}
                                    {<FiberManualRecordIcon style={{color:'red'}}/>}{RestoDetails.Service[2]}
                                    {<LocalBarIcon/>}{RestoDetails.Service[3]}
                                    <br />
                                {<b><i>Table Availability</i></b>} : {RestoDetails.Table_Availability}<br/>    
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <br/><br/>
        <Container maxWidth="sm">
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title={<b>MENU</b>}
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                         />
                         <CardContent>
                            <div>
                                {Dishes.map((dish)=>(
                                    <Grid container spacing={5}>
                                        <Grid item xs={6}>
                                            <Typography component="h4" align="left" variant="h6" color="textPrimary">
                                                {dish.Name} 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography component="h4" align="right" variant="h6" color="textPrimary">
                                                {dish.Price} 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                ))}
                            </div>
                         </CardContent>
                         <CardActions>
                    <Button fullWidth variant="contained" color="primary">
                        Book Table
                    </Button>
                </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br/><br/>
        </Container>
    </React.Fragment>
  );
}
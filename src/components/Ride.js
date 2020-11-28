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
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Comments from './Comments'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
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
        backgroundColor:'#50d5fa'
      },
  }));

// const RideDetails = {
//         Name: 'Deep Space',
//         Type_of_Ride: 'Roller Coaster',
//         Img_src: '"https://source.unsplash.com/random"',
//         Ride_Capacity: 30,
//         Age_Limit:'10 - 65 years',
//         Ride_Restrictions:'Min. height: 137cm (54").',
//         Description:'Deep Space is the first Dark Roller Coaster in India. '+
//         'Hop on to this high adrenaline rollercoaster that takes you into outer space.'+
//         'You will get launched into deep space among galaxies and black holes zipping '+
//         'through various planets and meteors.',
// }

export default function Ride(props) {
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
                            title={<b><i>{props.ride.rideType} - {props.ride.name}</i></b>}
                            titleTypographyProps={{ align: 'center', variant: 'h4'}}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography component="h4" align="left" variant="h6" color="textPrimary">
                                {props.ride.info}<br/><br/>
                                {<b><i>Ride Restrictions</i></b>} : {props.ride.rideRestriction}<br/>
                                {<b><i>Ride Capacity</i></b>} : {props.ride.capacity} people <br/>
                                {<b><i>Age Limit</i></b>} : {props.ride.ageLimit}<br/>  
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card>
                        <CardMedia
                            className={classes.cardMedia}
                            image={props.ride.imgSRC}
                            title={props.ride.name}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <br/><br/>
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title={<b><i>Visitor Feedbacks/Experience</i></b>}
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                         />
                        <CardContent>
                            <Comments id={props.ride._id}/>
                        </CardContent> 
                        
                    </Card>
                </Grid>
            </Grid>
            <br/><br/>
        </Container>
    </React.Fragment>
  );
}

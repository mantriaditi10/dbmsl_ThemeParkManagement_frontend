import React,{ useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import NavBar1 from './NavBar1'
import axios from 'axios'

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
  }));

const cards = [1, 2, 3];

export default function SplashScreen() {
  const classes = useStyles();
  const [rides,setRides]=useState([])
  const [resto,setResto]=useState([])
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
      axios.get('/rides/featured')
      .then(rides=>{
          console.log(rides.data)
          setRides(rides.data)
          axios.get('/restaurants/featured')
          .then(resto=>{
            console.log(resto.data)
            setResto(resto.data)
          })
      })
      .then(rides=>{
        setIsLoading(false)
      })
      .catch(err=>console.log(err))
  },[])

  if(isLoading===true){
    return(
    <div>
      Loading...
    </div>
    )
  }
  else{


  return (
    <React.Fragment>
      <NavBar1 />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Theme Park
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              India's Largest Amusement Park.
              <br />Plan your visit now {">>"}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button size="large" variant="contained" color="primary" href="/book">
                    Book Tickets
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <div>
            <Typography component="h4" variant="h4" align="left" color="textSecondary" gutterBottom>
                Rides and Attractions
            </Typography>
            <Typography component="h6" variant="h6" align="right" gutterBottom>
              <Link color="primary" href="">
                Browse All
              </Link>
            </Typography>
          </div>
          <Grid container spacing={4}>  
            {rides.map((ride) => (
              <Grid item key={ride._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={ride.imgSRC}
                    title={ride.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ride.name}
                    </Typography>
                    <Typography>
                      {ride.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br/><br/><br/>
          <div>
            <Typography component="h4" variant="h4" align="left" color="textSecondary" gutterBottom>
                Restaurants and Food Joints
            </Typography>
            <Typography component="h6" variant="h6" align="right" gutterBottom>
              <Link color="primary" href="">
                Browse All
              </Link>
            </Typography>
          </div>
          <Grid container spacing={4}>  
            {resto.map((resto) => (
              <Grid item key={resto._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={resto.imgSRC}
                    title={resto.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {resto.name}
                    </Typography>
                    <Typography>
                      {resto.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );

  }
}


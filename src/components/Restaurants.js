import React from 'react'
import Container from '@material-ui/core/Container'
import NavBar1 from './NavBar1'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
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

const cards = [1,2,3,4,5,6];

export default function Restaurants(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar1/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Unique Themed Restaurants
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Food courts, Buffet restaurants, Diners and Cocktail Bars, 
                            catering to a variety of Cuisines and Palettes. Experience Food Paradise.
                            <br />Explore them now {">>"}
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {props.restaurants.map((resto) => (
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
                                    View
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                    <br/>
                    
                </Container>
            </main>
        </React.Fragment>
    )
}

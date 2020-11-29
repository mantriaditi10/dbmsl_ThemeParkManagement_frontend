import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar1 from './NavBar1'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import {useHistory} from 'react-router'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const tiers = [
  {
    title: 'Silver',
    aprice: 800,
    cprice: 550,
    description: [
        'Get Unlimited Ride access',
        'Regular Theme Park Ticket',
        'Valid only for Date of Visit', 
        ],
    buttonText: 'Get Silver',
    buttonVariant: 'contained',
  },
  {
    title: 'Premium',
    subheader: 'Most popular',
    aprice: 1500,
    cprice: 800,
    description: [
      'Jump the Queue',
      'Get Express Access to rides',
      'Get a Complimentary Meal',
      'Special Discounts on next Visit',
    ],
    buttonText: 'Get Premium',
    buttonVariant: 'contained',
  },
  {
    title: 'Gold',
    aprice: 1000,
    cprice: 650,
    description: [
      'Express Access to any 3 rides',
      'Free Food Voucher Worth Rs.100',
      'Regular Access to other Rides',
    ],
    buttonText: 'Get Gold',
    buttonVariant: 'contained',
  },
];



export default function Pricing() {
  const classes = useStyles();
  const [ticketType, setTicketType] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [visitDate, setDate] = useState("");
  const [aprice, setaprice] = useState(0)
  const [cprice, setcprice] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"))
  const history =useHistory()
  
  function handleSubmit() {
    console.log(user)
      axios.post('/tickets',{
          ticketType:ticketType,
          adults:adults,
          children:children,
          dateOfVisit:visitDate,
          userId:user._id,
          amount:aprice*adults+cprice*children
      })
      .then(res=>{
        console.log(res)
        history.push('/ticket')
      })
      .catch(err=>console.log(err))
  }
  
  return (
    <React.Fragment>
        <NavBar1/>
      {/* Hero unit */}
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Ticket Booking
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Select Ticket type<br/>Fill other details to continue{">>"}
            </Typography>
        </Container>
      {/* End hero unit */}
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                        <Card>
                            <CardHeader
                            title={tier.title}
                            subheader={tier.subheader}
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{ align: 'center' }}
                            className={classes.cardHeader}
                            />
                            <CardContent>
                                <div className={classes.cardPricing}>
                                    <Typography component="h2" variant="h5" color="textPrimary">
                                        Adult : Rs.{tier.aprice}<br />
                                        Child : Rs.{tier.cprice}
                                    </Typography>
                                </div>
                                <ul>
                                    {tier.description.map((line) => (
                                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant={tier.buttonVariant} onClick={() => {setTicketType(tier.title)
                                                                              setaprice(tier.aprice)
                                                                              setcprice(tier.cprice)}} color="primary">
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        <br/><br/>
        <Container maxWidth="md" component="main">
            <Card>
                <CardHeader
                title="Enter Ticket Details:"
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
                />
                <CardContent>
                    <div>
                        <Typography component="h3" align="left" variant="h5" color="textPrimary" key={ticketType}>
                            Selected Ticket Type: {ticketType} 
                        </Typography>
                        <br/>
                        <div align="left">
                            <Typography component="h3" variant="h5" align="left">
                                Number of Tickets: 
                            </Typography>
                            <TextField 
                                id="adults"
                                label="No. of Adults"
                                variant="outlined" 
                                margin="normal"
                                size="medium"
                                onChange={(e) => setAdults(e.target.value)}
                            />
                            <TextField 
                                id="children"
                                label="No. of Children"
                                variant="outlined" 
                                margin="normal"
                                size="medium"
                                onChange={(e) => setChildren(e.target.value)}
                            />
                            <br/><br/>
                            <Typography component="h3" variant="h5" align="left">
                                Date Of Visit:
                            </Typography>
                            <br/>
                            <TextField
                                    id="date"
                                    label="Date of Visit"
                                    type="date"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            <br/><br/>
                            <Typography component="h3" variant="h5" align="left">
                                Amount to be paid : {aprice*adults+cprice*children}
                            </Typography>
                            <br/>
                            
                            
                        </div>               
                    </div>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                        Confirm
                    </Button>
                </CardActions>
            </Card>
            <br/><br/>
        </Container> 
        {/*
        //To check values stored in state
        <div>
            {ticketType}<br/>
            {adults}<br/>
            {chilren}<br/>
            {visitDate}<br/>
        </div>*/}
    </React.Fragment>
  );
}
import React,{useState,useEffect} from 'react'
import NavBar1 from './NavBar1'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, CardHeader, CardContent, CardActions, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import axios from 'axios'
import Loading from './Loading'
import Moment from 'moment';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
    },
    cardHeader: {
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
        color:'#3446eb',
    },
    list: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    fonts: {
        color:"#3446eb",
        fontWeight: "bold"
    },
}));

const TicketDetails = {
    userId:1,
    adults:2,
    children:2,
    type:'PREMIUM',
    visitDate:'05/12/2020',
    amount:'Rs.4600',
}

export default function Ticket() {
    const [ticket,setTicket]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const user = JSON.parse(localStorage.getItem("user"))
    const [success,setSuccess]=useState()

    useEffect(()=>{
        console.log("hiii")
        axios.get('/tickets/'+user._id)
        .then(res=>{
            console.log(res.data.ticket)
            if(res.data.success==true){
                setTicket(res.data.ticket)
            }
            else{
                setTicket({err:res.data.err})
            }
            setSuccess(res.data.success)
        })
        .then((res)=>{
            setIsLoading(false)
            console.log(ticket)
        })
        .catch(err=>console.log(err))
    },[])

    function downloadFile(){
        axios.get('/bookedticket/'+user._id,{responseType:'blob'})
        .then(data=>{
          const pdfblob = new Blob([data.data],{type:'application/pdf'})
          saveAs(pdfblob,'ticket.pdf')
          history.push('/home')
        })
        .catch(err=>console.log(err))
      }

    const classes = useStyles();
    if(isLoading===true){
        return(<Loading/>)
        
    }
    else{
        if(success===false){
            return (
                <React.Fragment>
                    <NavBar1/>
                    <main>
                    <div className={classes.heroContent}>
                        <Container maxWidth="md">
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                {ticket.err}
                            </Typography>
                        </Container>
                    </div>
                    </main>
                </React.Fragment>
                
            )
        }
        else{

            return (
                <React.Fragment>
                    <NavBar1/>
                    <main>
                    <div className={classes.heroContent}>
                        <Container maxWidth="md">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Ticket Confirmation
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Carry a <b>ScreenShot/Print</b> of this page along with any <b>Valid Government ID</b>
                                <br />Enjoy Your Visit!
                            </Typography>
                        </Container>
                        <br/>
                        <Container maxWidth="sm">
                            <Card>
                                <CardHeader
                                    className={classes.cardHeader}
                                    title="TICKET"
                                />   
                                <CardContent>
                                    <List className={classes.list}>
                                    <Divider />
                                        <ListItem alignItems="center">
                                            <ListItemText
                                                primary={
                                                    <div>
                                                        <Typography align="center" variant="h6" className={classes.fonts}>
                                                            No.Of People: 
                                                        </Typography>
                                                        <Typography align="center" variant="body1" className={classes.fonts}>
                                                            Adults: {ticket.noOfPeople.adults  } Chilren: {ticket.noOfPeople.children}
                                                        </Typography>
                                                    </div>
                                                }
                                            />   
                                        </ListItem>
                                        <Divider />
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                            Ticket Type: {ticket.ticketType} 
                                                    </Typography>
                                                }
                                            />   
                                        </ListItem>
                                        <Divider />
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                            Date of Visit: {Moment(ticket.dateOfVisit).format('DD-MM-YYYY')} 
                                                    </Typography>
                                                }
                                            />   
                                        </ListItem>
                                        <Divider />
                                        <ListItem alignItems="flex-start">
                                            <ListItemText
                                                primary={
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                            Total Amount: {TicketDetails.amount} 
                                                    </Typography>
                                                }
                                            />   
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant="contained" color="primary" onClick={downloadFile}>
                                        Download Ticket PDF
                                    </Button>
                                </CardActions>
                            </Card>
                        </Container>
                        <br/><br/>
                    </div>
                    </main>
                </React.Fragment>
                
            )
        }
    }
}

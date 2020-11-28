import React, { Component } from 'react'
import UserScreen from './components/UserScreen'
import './App.css'
import SplashScreen from './components/SplashScreen'
import BookTicket from './components/BookTicket'
import Rides from './components/Rides'
import { Switch, Route, Redirect, withRouter,BrowserRouter } from 'react-router-dom'
import Restaurants from './components/Restaurants'
import axios from 'axios'
import Restaurant from './components/Restaurant'
import Loading from './components/Loading'
import Ride from './components/Ride'
import Ticket from './components/Ticket'

export class App extends Component {
  constructor(props){
    super(props)
  }

  state={
    rides:[],
    restaurants:[],
    dishes:[],
    comments:[],
    isLoading:true
  }

  componentDidMount(){
      axios.get('/Rides')
      .then(rides=>{
          console.log(rides.data);
          axios.get('/Restaurants')
          .then(resto=>{
              console.log(resto.data)
              axios.get('/Dishes')
              .then((dishes)=>{
                  console.log(dishes.data)
                  this.setState({rides:rides.data,restaurants:resto.data,dishes:dishes.data,isLoading:false})
              })
              .catch((err)=>console.log(err))
             
          })
          .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err))
  }


  render() {
    

    const restWithId = ({match})=>{
      let dishes =this.state.dishes.map((dish)=>
      {
        console.log(dish.restId,match.params.id)
        if(dish.restId==match.params.id){
            return dish
        }
      })
      return(
          <div>
            {console.log(dishes)}
          <Restaurant restaurant={this.state.restaurants.filter((resto)=>resto._id==match.params.id)[0]}
            dishes={this.state.dishes.filter((dish)=>dish.restId===match.params.id)}></Restaurant>
          </div>
      )
    }

    const rideWithId = ({match})=>{
      return(
          <div>
            {console.log(this.state.rides.filter((resto)=>resto._id==match.params.id)[0])}
          <Ride ride={this.state.rides.filter((ride)=>ride._id==match.params.id)[0]} ></Ride>
          </div>
      )
    }

    const splash = ({match})=>{
      return(
          <div>
            
          <SplashScreen rides={this.state.rides.filter((ride)=>ride.featured==true)}
                        restaurants={this.state.restaurants.filter((resto)=>resto.featured==true)}></SplashScreen>
          </div>
      )
    }



    if(this.state.isLoading===true){
      return(
        <div>
          <Loading/>
        </div>
      )
    }
    else{
    return (
      <div className="App">
        
        <BrowserRouter>
          <Switch>
            
            <Route exact path='/' component={()=><UserScreen/>}></Route>
            <Route exact path='/login_signup' component={()=><UserScreen/>}></Route>
            <Route exact path='/home' component={splash}></Route>
            <Route exact path='/book' component={()=><BookTicket/>}></Route>
            <Route exact path='/ticket' component={()=><Ticket/>}></Route>
            <Route exact path='/rides' component={()=><Rides rides={this.state.rides}/>}></Route>
            <Route exact path='/rides/:id' component={rideWithId}></Route>

            <Route exact path='/restaurants' component={()=><Restaurants restaurants={this.state.restaurants}/>}></Route>
           
            <Route exact path='/restaurant' component={()=><Restaurant/>}></Route>
            <Route exact path='/restaurants/:id' component={restWithId}></Route>
            
          <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
  }
}

export default App


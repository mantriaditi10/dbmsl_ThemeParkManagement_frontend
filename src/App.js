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

export class App extends Component {
  constructor(props){
    super(props)
  }

  state={
    rides:[],
    restaurants:[],
    isLoading:true
  }

  componentDidMount(){
      axios.get('/rides')
      .then(rides=>{
          console.log(rides.data);
          axios.get('/restaurants')
          .then(resto=>{
              console.log(resto.data)
              this.setState({rides:rides.data,restaurants:resto.data,isLoading:false})
          })
          .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err))
  }


  render() {
    if(this.state.isLoading===true){
      return(
        <div>
          Loading...
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
            <Route exact path='/home' component={()=><SplashScreen/>}></Route>
            <Route exact path='/book' component={()=><BookTicket/>}></Route>
         
            <Route exact path='/rides' component={()=><Rides rides={this.state.rides}/>}></Route>
            <Route exact path='/restaurants' component={()=><Restaurants restaurants={this.state.restaurants}/>}></Route>
            <Route exact path='/restaurant' component={()=><Restaurant/>}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
  }
}

export default App


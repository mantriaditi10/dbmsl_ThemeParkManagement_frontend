import React, { Component } from 'react'
import UserScreen from './components/UserScreen'
import './App.css'
import SplashScreen from './components/SplashScreen'
import BookTicket from './components/BookTicket'
import Rides from './components/Rides'
import { Switch, Route, Redirect, withRouter,BrowserRouter } from 'react-router-dom'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SplashScreen />*/}
        <BrowserRouter>
          <Switch>
            {/*
            <Route exact path='/login_signup' component={()=><UserScreen/>}></Route>
            <Route exact path='/home' component={()=><SplashScreen/>}></Route>
            <Route exact path='/book' component={()=><BookTicket/>}></Route>
          */}
            <Route exact path='/rides' component={()=><Rides/>}></Route>
            <Route exact path='/restaurants' component={()=><Restaurants/>}></Route>
            <Route exact path='/restaurant' component={() => <Restaurant/>}></Route>
            <Redirect to='/rides'></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App


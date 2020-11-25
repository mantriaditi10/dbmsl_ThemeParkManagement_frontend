import React, { Component } from 'react'
import UserScreen from './components/UserScreen'
import './App.css'
import SplashScreen from './components/SplashScreen'
import BookTicket from './components/BookTicket'
import { Switch, Route, Redirect, withRouter,BrowserRouter } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SplashScreen />*/}
        <BrowserRouter>
          <Switch>
            <Route exact path='/login_signup' component={()=><UserScreen/>}></Route>
            <Route exact path='/home' component={()=><SplashScreen/>}></Route>
            <Route exact path='/book' component={()=><BookTicket/>}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App


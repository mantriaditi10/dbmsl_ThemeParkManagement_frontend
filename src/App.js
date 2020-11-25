import React, { Component } from 'react'
import UserScreen from './components/UserScreen'
import './App.css'
import SplashScreen from './components/SplashScreen'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <SplashScreen />
      </div>
    )
  }
}

export default App


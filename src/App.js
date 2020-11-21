import React, { Component } from 'react'
import UserScreen from './components/NavBar'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserScreen></UserScreen>
      </div>
    )
  }
}

export default App


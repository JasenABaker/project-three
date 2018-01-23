import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import UserPage from'./components/UserPage'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Users' component={UserPage}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App

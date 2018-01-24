import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import UserPage from'./components/UserPage'
import UserShow from './components/UserShow'


class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Users' component={UserPage}/>
        <Route exact path='/Users/:userId' component={UserShow}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App

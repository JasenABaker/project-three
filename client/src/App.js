import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserShow from './components/UserShow'
import NewUser from './components/NewUser'


class App extends Component {
  state = {
    users: []
  }
  async componentWillMount() {
    const response = await axios.get('/api/Users')
    this.setState({ users: response.data })
    //console.log(response.data)
  }
  newUser = async () => {
    const response = await axios.post('/api/Users')
    const newUser = response.data
    const newUsers = [...this.state.users]
    this.setState({ users: newUsers })
  }


  render() {
    const userPage = () => {
      return (
        <UserPage users={this.state.users} />
      )
      
    }
    const newUserPage = () =>{
      return(
        <NewUser newUser={this.newUser}/>
      )

    }
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Users' render={userPage} />
              <Route exact path='/Users/new' render={newUserPage}/>
              <Route exact path='/Users/:userId' component={UserShow} />
            </Switch>
          </div>
        </Router>
      )
    }
  }

  export default App

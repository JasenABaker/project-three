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
  // newUserPost = async () => {
  //   const response = await axios.post('/api/Users', this.state.newUser)
  //   const newUser = response.data
  //   const newUsers = [...this.state.users]
  //   this.setState({ users: newUsers })
  // }

  addNewUser = (newUser) =>{
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({users})
  }


  render() {
    const userPage = () => {
      return (
        <UserPage users={this.state.users} />
      )
      
    }
    const newUserPage = () =>{
      return(
        <NewUser addNewUser={this.addNewUser}/>
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

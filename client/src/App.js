import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserShow from './components/UserShow'
import NewUser from './components/NewUser'
import EditUser from './components/EditUser'


class App extends Component {
  state = {
    users: []
  }
  async componentWillMount() {
    const response = await axios.get('/api/Users')
    this.setState({ users: response.data })
    //console.log(response.data)
  }
  

  addNewUser = (newUser) =>{
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({users})
  }

  removeUser = (user) =>{
    const userToRemove = this.state.users.indexOf(user)
    const users = [...this.state.users]
    users.splice(userToRemove, 1)
    this.setState({users})
  }

  updateUsers = (user, updateUsers) => {
    const userToUpdate = this.state.users.indexOf(user)
    const users = [...this.state.users]
    users[userToUpdate] = updateUsers
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

    const userShowPage = (props) => {
      return (
        <UserShow {...props}
        removeUser={this.removeUser}/>
      )
    }

    const editUserPage = (props) =>{
      return(
        <EditUser {...props}
          updateUsers={this.updateUsers}/>
      )
    }

      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Users' render={userPage} />
              <Route exact path='/Users/new' render={newUserPage}/>
              <Route exact path='/Users/:userId' render={userShowPage} />
              <Route exact path='/Users/:userId/edit' render={editUserPage}/>
            </Switch>
          </div>
        </Router>
      )
    }
  }

  export default App

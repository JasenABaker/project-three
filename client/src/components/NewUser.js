import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './styled-components/Header'
import axios from 'axios'
import { ContainerOneColumn, FormContainer } from './styled-components/Containers';
import { Redirect } from 'react-router-dom'



class NewUser extends Component {
    state = {
        newUser: {
            userName: '',
            firstName: '',
            lastName: '',
            home: '',
            numberOfTrips: 0,
            photoUrl: 'https://www.ttmf-mortgages.com/wordpress/wp-content/uploads/2014/01/happy-vacation-man.jpg'
        },
        redirctToUsers: false
    }

    newUserPost = () => {
        const payload = this.state.newUser
        console.log("Calling API with payload:", this.state.newUser)
        axios.post('/api/Users', this.state.newUser)
        .then((res) => {
            return this.resetForm()
        })
    }

    handleInputChange = (event) => {
        const attribute = event.target.name
        let val = event.target.value

        const newUser = { ...this.state.newUser }
        newUser[attribute] = val

        this.setState({ newUser })
    }
    resetForm = () => {
        const newUser = { ...this.state.newUser }
        this.setState({ newUser })
    }
    _addNewUser = (event) => {
        event.preventDefault()
        console.log("ADDING USER:", this.state.newUser)
        this.props.addNewUser(this.state.newUser)
        this.newUserPost()
        this.setState({redirctToUsers: true})
    }

    render() {
        
        return (
                <div>
                    <Header>
                        <h1>Fanta<span>See</span></h1>
                        <nav><ul>
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
                            <Link to='/Users' style={{ textDecoration: 'none', color: 'inherit' }}><li>Users</li></Link>
                            <li>Worlds</li>
                        </ul>
                        </nav>
                    </Header>
                    <ContainerOneColumn>
                        <h1>New User</h1>
                        <div>
                            <form onSubmit={this._addNewUser}>
                                <FormContainer>
                                    <input name='firstName' type='text' placeholder='First Name' onChange={this.handleInputChange} />
                                    <input name='lastName' type='text' placeholder='Last Name' onChange={this.handleInputChange} />
                                    <input name='userName' type='text' placeholder='User Name' onChange={this.handleInputChange} />
                                    <input name='home' type='text' placeholder='Hometown' onChange={this.handleInputChange} />
                                    <input name='photoUrl' type='text' placeholder='Picture Url' onChange={this.handleInputChange} />
                                    <input type='submit' value='Create New User' />
                                </FormContainer>
                            </form>
                        </div>
                    </ContainerOneColumn>
                </div>
            )
        }
    }

export default NewUser
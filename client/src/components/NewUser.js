import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './styled-components/Header'
import axios from 'axios'
import { ContainerOneColumn, FormContainer } from './styled-components/Containers'
import { InputStyle, InputButton } from './styled-components/Inputs'
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
            // console.log("New User ID from add:", res.data._id)
            const updatedNewUser = {...this.state.newUser}
            updatedNewUser._id = res.data._id
            //console.log("Newestestest User Info:", updatedNewUser)
            this.props.addNewUser(updatedNewUser)
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    handleInputChange = (event) => {
        const attribute = event.target.name
        const val = event.target.value

        const newUser = { ...this.state.newUser }
        newUser[attribute] = val

        this.setState({ newUser })
    }

    _addNewUser = (event) => {
        event.preventDefault()
        // console.log("ADDING USER:", this.state.newUser)
        this.newUserPost()
        this.setState({redirctToUsers: true})
    }

    render() {
        
        return (
            <div>
            {this.state.redirctToUsers ? <Redirect to='/Users'/> : null}
                
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
                                    <InputStyle name='firstName' type='text' placeholder='First Name' onChange={this.handleInputChange} />
                                    <InputStyle name='lastName' type='text' placeholder='Last Name' onChange={this.handleInputChange} />
                                    <InputStyle name='userName' type='text' placeholder='User Name' onChange={this.handleInputChange} />
                                    <InputStyle name='home' type='text' placeholder='Hometown' onChange={this.handleInputChange} />
                                    <InputStyle name='photoUrl' type='text' placeholder='Picture Url' onChange={this.handleInputChange} />
                                    <InputButton type='submit' value='Create New User' />
                                </FormContainer>
                            </form>
                        </div>
                    </ContainerOneColumn>
                </div>
            )
        }
    }

export default NewUser
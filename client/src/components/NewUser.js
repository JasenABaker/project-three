import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './styled-components/Header'
import { ContainerOne } from './styled-components/Containers';



class NewUser extends Component {
    state = {
        newUser: {
            userName: '',
            firstName: '',
            lastName: '',
            home: '',
            numberOfTrips: 0,
            photoUrl: 'https://www.ttmf-mortgages.com/wordpress/wp-content/uploads/2014/01/happy-vacation-man.jpg'
        }
    }
    handleInputChange = (event)=>{
        const attribute = event.target.name
        let val = event.target.value
        
        const newUser = {...this.state.newUser}
        newUser[attribute] = val

        this.setState({newUser})
    }
    resetForm = () =>{
        const newUser = {...this.state.newUser}
        this.setState({newUser})
    }
    _addNewUser = (event)=>{
        event.preventDefault()
        this.props.addNewUser(this.state.newUser)
        this.resetForm()
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
                <ContainerOne>
                    <h1>New User</h1>
                    <div>
                    <form onSubmit={this._addNewUser}>
                    <div>
                    <input name='firstName' type='text' placeholder='First Name'onChange={this.handleInputChange}/>
                    <input name='lastName' type='text' placeholder='Last Name'onChange={this.handleInputChange}/>
                    <input name='userName' type='text' placeholder='User Name'onChange={this.handleInputChange}/>
                    <input name='home' type='text' placeholder='Hometown'onChange={this.handleInputChange}/>
                    <input name='photoUrl' type='text' placeholder='Picture Url'onChange={this.handleInputChange}/>
                    <input type='submit' value='Create New User'/>
                    </div>
                    </form>
                    </div>
                </ContainerOne>
            </div>
        )
    }
}


export default NewUser
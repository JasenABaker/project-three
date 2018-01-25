import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './styled-components/Header'
import axios from 'axios'
import { ContainerOneColumn, FormEdit } from './styled-components/Containers'
import { InputStyle, InputButton } from './styled-components/Inputs'
import { Redirect } from 'react-router-dom'


class EditUser extends Component {
    state = {
        user: {},
        redirctToUser: false
    }
    async componentWillMount () {
        const res = await axios.get(`/api/Users/${this.props.match.params.userId}`)
        this.setState({ user: res.data})
        //console.log(res.data)
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let val = event.target.value

        const user = { ...this.state.user }
        user[attribute] = val

        this.setState({ user })
    }

    updateUser = (event) =>{
    event.preventDefault()
    axios.patch(`/api/Users/${this.props.match.params.userId}`, this.state.user)
    .then((res)=>{
        this.props.updateUsers(res.data)
    
    }).catch((err)=>{
        console.log(err)
    })
    this.setState({redirctToUser: true})

    }




    render(){
        const user = this.state.user
        console.log(user._id)
        return (
            <div>
                {this.state.redirctToUser ? <Redirect to={`/Users/${this.props.match.params.userId}`}/> : null}
                
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
                    <h1>Edit {user.userName}</h1>
                    <div>
                        <form onSubmit={this.updateUser}>
                            <FormEdit>
                                <InputStyle name='firstName' type='text' placeholder='First Name'value={user.firstName} onChange={this.handleInputChange} />
                                <InputStyle name='lastName' type='text' placeholder='Last Name' value={user.lastName}onChange={this.handleInputChange} />
                                <InputStyle name='userName' type='text' placeholder='User Name'value={user.userName} onChange={this.handleInputChange} />
                                <InputStyle name='home' type='text' placeholder='Hometown'value={user.home} onChange={this.handleInputChange} />
                                <InputStyle name='photoUrl' type='text' placeholder='Picture Url'value={user.photoUrl} onChange={this.handleInputChange} />
                                <InputStyle name='numberOfTrips' type='number' placeholder='Number of Trips'value={user.numberOfTrips} onChange={this.handleInputChange} />
                                <InputButton type='submit' value={`Edit ${user.userName}`} />
                            </FormEdit>
                        </form>
                    </div>
                </ContainerOneColumn>

        </div>
        )
    }
}



export default EditUser
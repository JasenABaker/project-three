import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import landscape from './images/landscape.jpg'
import Header from './components/styled-components/Header'
import Splash from './components/styled-components/Splash'


class App extends Component {
  render() {
    return (
      <div >
        <style>
          @import url('https://fonts.googleapis.com/css?family=Risque');
        </style>
        <Header>
          <h1>Fanta<span>See</span></h1>
          <nav><ul>
            <li>Home</li>
            <li>Users</li>
            <li>Worlds</li>
          </ul>
          </nav>
        </Header>
        <Splash>
          <img src={landscape} alt="landscape"/>
          <a>Users</a>
        </Splash>
        <div>

        </div>

      </div>
    )
  }
}

export default App

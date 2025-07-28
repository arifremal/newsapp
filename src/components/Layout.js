import React, { Component } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import News from './News'

export class Layout extends Component {
  render() {
    return (
      <>
      <NavBar></NavBar>
   
      <Outlet></Outlet>
      
      </>
    )
  }
}

export default Layout
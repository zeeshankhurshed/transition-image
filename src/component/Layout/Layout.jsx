import React from 'react'
import { Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <Nav/>
     <Outlet/> 
    </>
  )
}

export default Layout

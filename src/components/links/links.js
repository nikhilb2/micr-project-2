import React from 'react'
import "./links.css"
import { Nav } from 'react-bootstrap'
const Links = (props) => {
  return (
    <Nav className="ml-auto nav-wrapper">
      <Nav.Link href="#">Privacy</Nav.Link>
      <Nav.Link href="#">Sales Term</Nav.Link>
      <Nav.Link href="#">Terms Of Service</Nav.Link>
      <Nav.Link href="#">Support</Nav.Link>
  </Nav>
  )
}

export default Links

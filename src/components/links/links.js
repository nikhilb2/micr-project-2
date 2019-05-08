import React from 'react'
import "./links.css"
import { Nav } from 'react-bootstrap'
const Links = (props) => {
  return (
    <div className="link">
      <div><Nav.Link href="#">Link1</Nav.Link></div>
      <Nav.Link href="#">Link1</Nav.Link>
      <Nav.Link href="#">Link1</Nav.Link>
      <Nav.Link href="#">Link1</Nav.Link>
      <Nav.Link href="#">Link1</Nav.Link>
  </div>
  )
}

export default Links

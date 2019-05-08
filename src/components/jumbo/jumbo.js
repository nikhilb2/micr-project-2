import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./jumbo.css"
const Jumbo = (props) => {
  const { style, heading } = props
  return (
    <div>
      <Jumbotron className={style}>
       <div className="mt-5">
          <img className="logo" src={require('../../google.png')} />
          <h2>
            { heading }
          </h2>
          <button className="btn btn-outline-primary mt-5">Sign Up</button>
       </div>
      </Jumbotron>
  </div>
  )
}

export default Jumbo

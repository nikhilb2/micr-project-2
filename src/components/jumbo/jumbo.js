import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./jumbo.css"
const Jumbo = (props) => {
  const { style, heading } = props
  return (
    <div>
      <Jumbotron className={style}>
        <h2>
          { heading }
        </h2>
      </Jumbotron>
  </div>
  )
}

export default Jumbo

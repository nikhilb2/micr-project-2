
import React from 'react';
import NavigationBar from './navbar/navbar'
import { Container, Row, Col } from 'react-bootstrap'
import  Jumbo  from './jumbo/jumbo'
const HomePage = (props) => {
    return (
      <div>
        <NavigationBar />
        <Jumbo />
      </div>
    )

  }


export default HomePage


import React from 'react';
import NavigationBar from './navbar/navbar'
import { Container, Row, Col } from 'react-bootstrap'
import  Jumbo  from './jumbo/jumbo'
import  Footer  from './footer/footer'
const heading = "Keep me updated about devices, news, tips and offers from Google Store."
const HomePage = (props) => {
    return (
      <div>
        <NavigationBar />
        <Jumbo style='banner' />
        <Jumbo style='jumbo2' heading={heading} caption={true}/>
        <Footer/>
      </div>
    )

  }


export default HomePage

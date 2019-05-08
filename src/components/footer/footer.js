import React from 'react'
import "./footer.css"
import SocialIcons from "../socialicons/socialicons.js"
import Links from "../links/links.js"
const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <SocialIcons />
      <Links />
    </div>
  )
}

export default Footer

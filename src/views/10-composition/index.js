import React from 'react'

function FancyBorder (props) {
  return (
    <div className={'fancy-border fancy-border-' + props.color}>
      {props.children}
    </div> 
  )
}

function WelcomeDialog () {
  return (
    <FancyBorder>
      <h1 className="dialog-title">Welcome</h1>
      <p className="dialog-content">
        Thank for your visiting our spacecraft
      </p>
    </FancyBorder>
  )
}

export default WelcomeDialog
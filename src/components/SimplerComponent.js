// Code SimplerComponent Here

import React, { Component } from 'react'

class SimpleComponent extends React.Component {


  render() {
    return (
      <div onClick = {props.handleClick}>
        I am just happy
      </div>
    )
  }

}

export default SimplerComponent

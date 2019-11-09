// Code SimpleComponent Here

import React, { Component } from 'react'

class SimpleComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mood: 'happy'
    };
  }


  handleClick = () => {
    //const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    console.log(this.state.mood)
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    }
    else {
      this.setState({
        mood: 'happy'
      })
    }

  }

  render() {
    return (
      <div onClick = {this.handleClick()}>
        {this.state.mood}
      </div>
    )
  }

}

export default SimpleComponent

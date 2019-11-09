import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const color = "white"

changeColor = () => {
  const color = "red"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.changeColor} color={color} />
  </div>,
  document.getElementById('root')
);

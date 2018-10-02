import React from 'react';
import Button from './Button.js';
import { store } from './store';
import {
  randomizeColorComponent
} from './actions';

class RandomButtonGroup extends React.Component {
  dispatchButtonAction(parameter) {
    let value = randomizeValue();
    let colorComponent = parameter;
    console.log(colorComponent);
    if(colorComponent === 'alpha') {
      value = (value/256).toFixed(2);
    }
    store.dispatch(randomizeColorComponent(value, colorComponent));
  }

  render() {
    return (
      <div className="random-input">
        <p>
          Random:
        </p>
        <Button text="random red" onClick={this.dispatchButtonAction.bind(this, 'red')} style={{backgroundColor: `rgb(${store.getState().red},0,0)`}} />
        <Button text="random green" onClick={this.dispatchButtonAction.bind(this, 'green')} style={{backgroundColor: `rgb(0,${store.getState().green},0)`}} />
        <Button text="random blue" onClick={this.dispatchButtonAction.bind(this, 'blue')} style={{backgroundColor: `rgb(0,0,${store.getState().blue})`}} />
        <Button text="random alpha" onClick={this.dispatchButtonAction.bind(this, 'alpha')} style={{backgroundColor: `#000000`}} />
      </div>
    );
  }
}

function randomizeValue() {
  return Math.floor(Math.random()*256);
}

export default RandomButtonGroup;
import React from 'react';
import MainText from './MainText.js';
import RandomButtonGroup from './RandomButtonGroup.js';
import ManualInputGroup from './ManualInputGroup';
import Shape from './Shape.js';

import { store } from './store';

import './App.css';

/*class ShapeInputColumn extends React.Component {
  handleClick(event) {
    let selectedShape = event.target.value;
    this.props.onGetSelectedShape(selectedShape);
  }
  
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <RadioButton shape='circle' checked={this.props.shape === 'circle'} onClick={this.handleClick.bind(this)}/>
        <RadioButton shape='rectangle' checked={this.props.shape === 'rectangle'} onClick={this.handleClick.bind(this)}/>
        <RadioButton shape='triangle' checked={this.props.shape === 'triangle'} onClick={this.handleClick.bind(this)}/>
        {
          //<RadioButton shape=''/>
        }
      </div>
    );
  }
}

class RadioButton extends React.Component {
  render() {
    return (
      <div className="radio-inline">
        <label>
          <input type="radio" name="shape" value={this.props.shape} checked={this.props.checked} onClick={this.props.handleClick}/> {this.props.shape}
        </label>
      </div>
    );
  }
}
*/

class App extends React.Component {
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(r, g, b, a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  convertToHexSingle(input) {
    let result = (+input).toString(16);
    if(result.length < 2) {
      result = '0' + result;
    }
    return result;
  }

  convertToHex(r, g, b) {
    let rgb = [r, g, b];
    for(let i = 0; i < rgb.length; i++) {
      rgb[i] = this.convertToHexSingle(rgb[i]);
    }
    return rgb.join('');
  }

  formatColorToHex(r, g, b) {
    return `#${this.convertToHex(r, g, b)}`;
  }

  applyColor() {
    /*const color = this.formatColor(store.getState().red, store.getState().green, store.getState().blue, store.getState().alpha);
    const totalColorValue = store.getState().red*299 + store.getState().green*587 + store.getState().blue*114;
    const invertedColor = this.formatColor((255-store.getState().red), (255-store.getState().green), (255-store.getState().blue), store.getState().alpha);
    /*if(totalColorValue >= 125000 || this.state.alpha >= 0.6) {
      document.body.style.background = this.formatColor(0,0,0,1);
    } else {
      document.body.style.background = this.formatColor(240,240,240,1);
    }*/
    //document.body.style.background = this.formatColor(0,0,0,1-this.state.alpha);
    //document.getElementsByClassName('main-text')[0].style.color = color;
    //document.getElementsByClassName('random-input')[0].style.color = color;
    //document.getElementsByClassName('manual-input')[0].style.color = color;
  }

  handleSelectedShape(parameter) {
    if(parameter === 'circle') {
      this.setState({
        shape: parameter,
      });
    } else if(parameter === 'rectangle') {
      this.setState({
        shape: parameter
      });
    } else if(parameter === 'triangle') {
      this.setState({
        shape: parameter
      });
    }
  }

  render() {
    return (
      <div>
        <MainText 
          color={this.formatColor(store.getState().red, store.getState().green, store.getState().blue, store.getState().alpha)}
          colorHex={this.formatColorToHex(store.getState().red, store.getState().green, store.getState().blue)}
        />
        <RandomButtonGroup />
        <ManualInputGroup />
        {/*<ShapeInputColumn shape={store.getState().shape} onGetSelectedShape={this.handleSelectedShape}/>*/}
        <Shape
          color={this.formatColor(store.getState().red, store.getState().green, store.getState().blue, store.getState().alpha)}
          invertedColor={this.formatColor(255-store.getState().red, 255-store.getState().green, 255-store.getState().blue, store.getState().alpha)}
        />
      </div>
    );
  }
}

export default App;
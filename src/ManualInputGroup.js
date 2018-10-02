import React from 'react';
import Input from './Input.js';
import './App.css';
import { store } from './store';
import { changeColorComponent } from './actions';

class ManualInputGroup extends React.Component {
  dispatchInputAction(parameter, event) {
    let colorComponent = parameter;
    let colorComponentValue = event.target.value;
    store.dispatch(changeColorComponent(colorComponent, colorComponentValue));
  }
  render() {
    return (
      <div className='manual-input'>
        <p>
          Manual input:
        </p>
        <p className="manual-input">
          <div className="manual-input-text">
            Red
          </div>
          <div className="manual-input-text">
            Green
          </div>
          <div className="manual-input-text">
            Blue
          </div>
          <div className="manual-input-text">
            Alpha
          </div>
        </p>
        <div>
          <Input value={store.getState().red} max="255" step="1" onChange={this.dispatchInputAction.bind(this, 'red')}/>
          <Input value={store.getState().green} max="255" step="1" onChange={this.dispatchInputAction.bind(this, 'green')}/>
          <Input value={store.getState().blue} max="255" step="1" onChange={this.dispatchInputAction.bind(this, 'blue')}/>
          <Input value={store.getState().alpha} max="1" step="0.01" onChange={this.dispatchInputAction.bind(this, 'alpha')}/>
        </div>
      </div>
    );
  }
}

export default ManualInputGroup;
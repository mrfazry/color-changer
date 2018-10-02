import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        type="number"
        size="10"
        min="0"
        max={this.props.max}
        step={this.props.step}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
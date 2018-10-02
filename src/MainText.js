import React from 'react';

class MainText extends React.Component {
  render() {
    return (
      <div className="main-text">
        <h1>
          Your color is: {this.props.color}.
        </h1>
        <h2>
          In hex: {this.props.colorHex}.
        </h2>
      </div>
    );
  }
}

export default MainText;
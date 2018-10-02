import React from 'react';
import { Stage, Layer, /*Rect, Text, Line*/ Circle } from 'react-konva';

class Shape extends React.Component {
  render() {
    return (
      <Stage width={window.innerWidth} height='200'>
      <Layer>
        <Circle x={window.innerWidth/2} y={125} radius={50} fill={this.props.color}/>
      </Layer>
    </Stage>
    );
  }
}

export default Shape;
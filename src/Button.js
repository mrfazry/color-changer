import React from 'react';
import './App.css';

class Button extends React.Component {
	render() {
		return (
      <button onClick={this.props.onClick}
        className='button' 
				style={this.props.style}
				>
				{this.props.text}
			</button>
		);
    }
    
}

export default Button;
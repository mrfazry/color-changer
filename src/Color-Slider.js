import React from 'react';
import Slider from 'nw-react-slider'

export class ColorSlider extends React.Component {
    constructor(props) {
		super(props);
		const { value } = this.props;
		this.state = { value };
    }
    
    handleChange() {
        console.log('Change');
    }
    
	render() {
		return (
			<div className="slidecontainer">
                <input type="range" min={0} max={255} value={10} className="slider" onChange={this.handleChange}/>
            </div>
		);
    }
    
}
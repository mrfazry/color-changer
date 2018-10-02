import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

export class ColorSlider extends React.Component {
	render() {
		return (
			<div className="slidecontainer">
                <Slider 
                    min={0}
                    max={255}
                />
            </div>
		);
    }
    
}
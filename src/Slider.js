import React from 'react';

export class Slider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {value: 10};
		this.handleChange = this.handleChange.bind(this);

    }
	
	getInitialState() {
		return {value: 3};
	}
	
    handleChange() {
        this.setState({value: event.target.value});
    }
    
	render() {
		return (
			<div className="slidecontainer">
				<input 
					type="range"
					min={0}
					max={255}
					value={this.state.value}
					className="slider"
					onChange={this.handleChange}/>
            </div>
		);
    }
    
}
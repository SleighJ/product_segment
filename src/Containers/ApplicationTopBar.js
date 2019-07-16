import React, { Component } from "react";

class Topbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id={'topbar'} style={{width: '100%', height: '10rem', backgroundColor: 'rgb(38, 165, 132)', position: 'relative', zIndex: '95'}}></div>
		)
	}
}

export default Topbar;
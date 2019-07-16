import React, { Component } from "react";

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id={'sidebar'} style={{width: '14%', height: '100%', backgroundColor: 'rgb(58, 58, 58)', position: 'fixed', zIndex: '100'}}></div>
		)
	}
}

export default Sidebar;
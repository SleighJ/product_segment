import React, { Component } from "react";

class ApplicationHeader extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id={'application-header'} style={{width: '100%', height: '6.5%', backgroundColor: 'white', position: 'fixed', zIndex: '101' }}></div>
		)
	}
}

export default ApplicationHeader;
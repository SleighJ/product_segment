import React, { Component } from 'react';

import {
	Segment,
	Header
} from 'semantic-ui-react';

import '../CSS/DefineSegment.css';

class DefineSegment extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
				<Segment id={'define-segment'}>

					<Header id={'header'} as={'h4'}>Define a new Segment</Header>

					<p>Add a condition to define a segment. The more conditions you add, the more specific your segment will be</p>

				</Segment>
		)
	}
}

export default DefineSegment;

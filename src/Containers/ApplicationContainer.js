import React, { Component } from 'react';

import DefineSegment from '../Components/DefineSegment';
import SegmentSize from '../Components/SegmentSize';

import { Grid } from 'semantic-ui-react';

export default class ApplicationContainer extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Grid.Row columns={2}>

						<Grid.Column width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize />
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
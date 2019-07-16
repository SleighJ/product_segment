import React, { Component } from 'react';

import DefineSegment from '../Components/DefineSegment';
import SegmentSize from '../Components/SegmentSize';
import ProductInteraction from '../Components/ProductInteraction';
import TimeOfInteraction from '../Components/TimeOfInteraction';


import {
	Grid,
	Divider
} from 'semantic-ui-react';

import '../CSS/ApplicationContainer.css';

export default class ApplicationContainer extends Component {
	render() {
		return (
			<div>
				<Grid>

					<Grid.Row id={'row'} columns={2}>

						<Grid.Column width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize />
						</Grid.Column>

					</Grid.Row>

					<Grid.Row id={'row'} width={16}>

						<ProductInteraction />

					</Grid.Row>

					<Divider section={true}/>

					<Grid.Row>

						<TimeOfInteraction />

					</Grid.Row>


				</Grid>
			</div>
		);
	}
}
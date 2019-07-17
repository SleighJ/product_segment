import React, { Component } from 'react';

import DefineSegment from '../Components/DefineSegment';
import SegmentSize from '../Components/SegmentSize';
import ProductInteraction from '../Components/ProductInteraction';
import TimeOfInteraction from '../Components/TimeOfInteraction';
import Technology from '../Components/Technology';
import NewCondition from '../Components/NewCondition';

import {
	Grid,
	Divider,
	Segment,
} from 'semantic-ui-react';

import '../CSS/ApplicationContainer.css';

export default class ApplicationContainer extends Component {
	render() {
		return (
			<div>
				<Grid>

					{/*row 1: define segment and segment size*/}
					<Grid.Row id={'row'} columns={2}>
						<Grid.Column id={'define-segment'} width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize />
						</Grid.Column>
					</Grid.Row>

					{/*row 2: Product Interaction and Product History*/}
					<Segment id={'interaction-history-segment'}>
						<Grid.Row width={16}>
							<ProductInteraction />
						</Grid.Row>

						<Divider />

						<Grid.Row width={16}>
							<TimeOfInteraction />
						</Grid.Row>
					</Segment>

					{/*row 4: Technology*/}
					<Grid.Row id={'technology-row'}>
						<Technology />
					</Grid.Row>

					{/*row 5: new Condition*/}
					<Grid.Row id={'new-condition-row'}>
						<NewCondition />
					</Grid.Row>

				</Grid>
			</div>
		);
	}
}
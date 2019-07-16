import React, { Component } from 'react';

import DefineSegment from '../Components/DefineSegment';
import SegmentSize from '../Components/SegmentSize';
import ProductInteraction from '../Components/ProductInteraction';
import TimeOfInteraction from '../Components/TimeOfInteraction';
import Technology from '../Components/Technology';
import NewCondition from '../Components/NewCondition';

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

					{/*row 1: define segment and segment size*/}
					<Grid.Row id={'row'} columns={2}>
						<Grid.Column width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize />
						</Grid.Column>
					</Grid.Row>

					{/*row 2: Product Interaction and Product History*/}
					<Grid.Row id={'row'} width={16}>
						<ProductInteraction />
					</Grid.Row>

					<Divider section={true}/>

					{/*row 3: Time of Interaction*/}
					<Grid.Row>
						<TimeOfInteraction />
					</Grid.Row>

					{/*row 4: Technology*/}
					<Grid.Row>
						<Technology />
					</Grid.Row>

					{/*row 5: new Condition*/}
					<Grid.Row>
						<NewCondition />
					</Grid.Row>

				</Grid>
			</div>
		);
	}
}
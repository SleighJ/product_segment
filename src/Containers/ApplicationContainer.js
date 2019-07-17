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
	constructor(props) {
		super(props);

		this.state = {
			//product interaction
			currentlySelectedGender: null,
			currentlySelectedAssociation: null,
			currentlySelectedGarments: [],
			conditionHistory: [],
		}
	}

	//retrieves active gender value from <ProductInteraction /> and passes it to <SegmentSize /> in real time
	retrieveGender = (gender) => {
		this.setState({
			currentlySelectedGender: gender,
		})
	};

	//retrieves active association value from <ProductInteraction /> and passes it to <SegmentSize /> in real time
	retrieveAssociation = (association) => {
		this.setState({
			currentlySelectedAssociation: association,
		})
	};

	//retrieves active selected items value from <ProductInteraction /> and passes it to <SegmentSize /> in real time
	retrieveSelectedGarments = (selectedGarments) => {
		// console.log('garments passed to retreiveSelectedGarments')
		// console.log(selectedGarments)
		this.setState({
			currentlySelectedGarments: selectedGarments,
		})
	};

	//retrieves active conditions from <ProductInteraction /> and passes them to <SegmentSize />
	retrieveCondition = (conditionHistoryObj) => {
		const { conditionHistory } = this.state;

		this.setState({
			conditionHistory: [...conditionHistory, conditionHistoryObj],
		})
	};

	render() {
		const { conditionHistory, currentlySelectedGender, currentlySelectedAssociation, currentlySelectedGarments } = this.state;

		return (
			<div>
				<Grid>

					{/*row 1: define segment and segment size*/}
					<Grid.Row id={'row'} columns={2}>
						<Grid.Column id={'define-segment'} width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize
								currentlySelectedGender={ currentlySelectedGender }
								currentlySelectedAssociation={ currentlySelectedAssociation }
								currentlySelectedGarments={ currentlySelectedGarments }
								conditionHistory={ conditionHistory }
							/>
						</Grid.Column>
					</Grid.Row>

					{/*row 2: Product Interaction and Product History*/}
					<Segment id={'interaction-history-segment'}>
						<Grid.Row width={16}>
							<ProductInteraction
								retrieveGender={ this.retrieveGender }
								retrieveAssociation={ this.retrieveAssociation }
								retrieveSelectedGarments={ this.retrieveSelectedGarments }
								retrieveCondition={ this.retrieveCondition }
							/>
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
import React, { Component } from 'react';

import DefineSegment from '../Components/DefineSegment';
import SegmentSize from '../Components/SegmentSize';
import ProductInteraction from '../Components/ProductInteraction';
import TimeOfInteraction from '../Components/TimeOfInteraction';
import Technology from '../Components/Technology';
import NewCondition from '../Components/NewCondition';
import ProductInteractionHistory from '../Components/ProductInteractionHistory';

import {
	Grid,
	Divider,
	Segment,
	Modal,
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
			//time of interaction
			selectedModifier: null,
			selectedDay: null,
			selectedStartDay: null,
			selectedEndDay: null,
			//technology
			selectedDevice: null,
			selectedOperatingSystem: null,
		}
	}

	// Product Interaction

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

	// Time

	retrieveSelectedModifier = (selectedModifier) => {
		this.setState({
			selectedModifier,
		})
	};

	retrieveDate = (selectedDay) => {
		this.setState({
			selectedDay,
		})
	};

	retrieveStartDate = (selectedStartDay) => {
		this.setState({
			selectedStartDay,
		})
	};

	retrieveEndDate = (selectedEndDay) => {
		this.setState({
			selectedEndDay,
		})
	};

	// Technology

	retrieveSelectedDevice = (selectedDevice) => {
		this.setState({
			selectedDevice,
		})
	};

	retrieveOperatingSystem = (selectedOperatingSystem) => {
		this.setState({
			selectedOperatingSystem,
		})
	};

	printSourceCode = () => {
		console.log(this.state)
		// this.setState({
		// 	printSourceCode: true,
		// })
	};

	render() {
		const {
			currentlySelectedGender,
			currentlySelectedAssociation,
			currentlySelectedGarments,
			conditionHistory,
			selectedModifier,
			selectedDay,
			selectedStartDay,
			selectedEndDay,
			selectedDevice,
			selectedOperatingSystem,
		} = this.state;

		console.log(this.state)

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

					{/*row 2: Product Interaction*/}
					<Segment id={'interaction-history-segment'}>
						<Grid.Row width={16}>

							{/*create ProductInteractionHistory*/}
							<ProductInteractionHistory
								conditionHistory={ conditionHistory }
							/>

							<ProductInteraction
								retrieveGender={ this.retrieveGender }
								retrieveAssociation={ this.retrieveAssociation }
								retrieveSelectedGarments={ this.retrieveSelectedGarments }
								retrieveCondition={ this.retrieveCondition }
							/>
						</Grid.Row>

						<Divider />

						<Grid.Row width={16}>
							<TimeOfInteraction
								retrieveSelectedModifier={ this.retrieveSelectedModifier }
								retrieveDate={ this.retrieveDate }
								retrieveStartDate={ this.retrieveStartDate }
								retrieveEndDate={ this.retrieveEndDate }
							/>
						</Grid.Row>
					</Segment>

					{/*row 4: Technology*/}
					<Grid.Row id={'technology-row'}>
						<Technology
							retrieveSelectedDevice={ this.retrieveSelectedDevice }
							retrieveOperatingSystem={ this.retrieveOperatingSystem }
						/>
					</Grid.Row>

					{/*row 5: new Condition*/}
					<Grid.Row id={'new-condition-row'}>
						<NewCondition />
						<Grid.Column width={6}></Grid.Column>
						<Grid.Column width={6}></Grid.Column>
						<Grid.Column width={4} style={{paddingLeft: '5%', textAlign: 'right', fontSize: '12px', marginTop: '-1%', paddingBottom: '3%'}}>
							<Modal
								trigger={<a onClick={ this.printSourceCode }>Show source code</a>}
							>
								<Modal.Content>
									{
										<ul>
											<li>Product Interactions
												<ul>
													<li>currentlySelectedGender: {JSON.stringify(currentlySelectedGender)}</li>
													<li>currentlySelectedAssociation: {JSON.stringify(currentlySelectedAssociation)}</li>
													<li>currentlySelectedGarments: {JSON.stringify(currentlySelectedGarments)}</li>
													<ul>
														<li>pastProductConditions:</li>
														<ul>{conditionHistory.map((entry, i) => {
															return(
																<li key={i}>{JSON.stringify(entry)}</li>
															)
														})}</ul>

													</ul>
												</ul>
												<li>Time of Interaction
													<ul>
														<li>dateModifier: {JSON.stringify(selectedModifier)}</li>
														<li>selectedDay: {JSON.stringify(selectedDay)}</li>
														<li>selectedStartDay: {JSON.stringify(selectedStartDay)}</li>
														<li>selectedEndDay: {JSON.stringify(selectedEndDay)}</li>
													</ul>
												</li>

												<li> Technology Used
													<ul>
														<li>selectedDevice: {JSON.stringify(selectedDevice)}</li>
														<li>selectedOperatingSystem: {JSON.stringify(selectedOperatingSystem)}</li>
													</ul>
												</li>
											</li>
										</ul>
									}
								</Modal.Content>
							</Modal>

						</Grid.Column>
					</Grid.Row>


				</Grid>
			</div>
		);
	}
}
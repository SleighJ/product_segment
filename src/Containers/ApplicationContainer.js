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

		this.modalContent = React.createRef();

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
			//segment size
			numberOfGender: null,
			currentSegmentSize: null,
			lastRemovedHistoryObject: null,
			removeCurrentProductConditions: false,
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
		const { conditionHistory, currentSegmentSize, numberOfGender } = this.state;

		if (currentSegmentSize) {
			const conditionHistoryLength = conditionHistory.length;
			const id = conditionHistoryLength > 0 ? conditionHistory[conditionHistoryLength-1].id + 1 : conditionHistoryLength;

			let conditionHistoryObjCopy = {
				id: id,
				selectedAssociation: conditionHistoryObj.selectedAssociation,
				selectedGarments: conditionHistoryObj.selectedGarments,
				selectedGender: conditionHistoryObj.selectedGender,
				numberOfGender: numberOfGender,
				segmentSizeSnapShot: currentSegmentSize,
			};

			this.setState({
				conditionHistory: [...conditionHistory, conditionHistoryObjCopy],
			})
		}
	};

	retrieveConditionHistory = (conditionHistory) => {
		this.setState({
			conditionHistory,
		})
	};

	retrieveRemoveCurrentConditions = () => {
		this.setState({
			removeCurrentProductConditions: !this.state.removeCurrentProductConditions,
		})
	};

	retrieveRemovedHistoryCondition = (removedHistoryObject) => {
		this.setState({
			lastRemovedHistoryObject: removedHistoryObject,
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

	retrieveTimeHistory = (timeHistoryObject) => {
		console.log(timeHistoryObject)
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
		// console.log(this.state)
		// this.setState({
		// 	printSourceCode: true,
		// })
	};

	copyJSON = () => {
		const currentData = this.modalContent.current;

		// console.log(currentData)
	};

	//Segment Size

	retrieveNumberOfGender = (numberOfGender) => {
		this.setState({
			numberOfGender,
		})
	};

	retrieveSegmentSize = (currentSegmentSize) => {
		this.setState({
			currentSegmentSize,
		})
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
			removeCurrentProductConditions,
			lastRemovedHistoryObject,
		} = this.state;

		return (
				<Grid>
					<Grid.Row id={'row'} columns={2}>
						<Grid.Column id={'define-segment'} width={6}>
							<DefineSegment />
						</Grid.Column>

						<Grid.Column width={10}>
							<SegmentSize
								//state values
								currentlySelectedGender={ currentlySelectedGender }
								currentlySelectedAssociation={ currentlySelectedAssociation }
								currentlySelectedGarments={ currentlySelectedGarments }
								conditionHistory={ conditionHistory }
								selectedModifier={ selectedModifier }
								selectedDay={ selectedDay }
								selectedStartDay={ selectedStartDay }
								selectedEndDay={ selectedEndDay }
								selectedDevice={ selectedDevice }
								selectedOperatingSystem={ selectedOperatingSystem }
								removeCurrentProductConditions={ removeCurrentProductConditions }
								lastRemovedHistoryObject={ lastRemovedHistoryObject }

								//functions
								retrieveNumberOfGender={ this.retrieveNumberOfGender }
								retrieveSegmentSize={ this.retrieveSegmentSize }
								retrieveRemoveCurrentConditions={ this.retrieveRemoveCurrentConditions }
								retrieveTimeHistory={ this.retrieveTimeHistory }
							/>
						</Grid.Column>
					</Grid.Row>

					<Segment id={'interaction-history-segment'}>
						<Grid.Row width={16}>

							<ProductInteractionHistory
								//state values
								conditionHistory={ conditionHistory }

								//functions
								retrieveConditionHistory={ this.retrieveConditionHistory }
								retrieveRemovedHistoryCondition={ this.retrieveRemovedHistoryCondition }
							/>

							<ProductInteraction
								retrieveGender={ this.retrieveGender }
								retrieveAssociation={ this.retrieveAssociation }
								retrieveSelectedGarments={ this.retrieveSelectedGarments }
								retrieveCondition={ this.retrieveCondition }
								retrieveRemoveCurrentConditions={ this.retrieveRemoveCurrentConditions }
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

					<Grid.Row id={'technology-row'}>
						<Technology
							retrieveSelectedDevice={ this.retrieveSelectedDevice }
							retrieveOperatingSystem={ this.retrieveOperatingSystem }
						/>
					</Grid.Row>

					<Grid.Row id={'new-condition-row'}>
						<NewCondition />
						<Grid.Column width={6}></Grid.Column>
						<Grid.Column width={6}></Grid.Column>
						<Grid.Column width={4} style={{paddingLeft: '5%', textAlign: 'right', fontSize: '12px', marginTop: '-1%', paddingBottom: '3%'}}>
							<Modal ref={ this.modalContent } trigger={ <a onClick={ this.printSourceCode }>Show source code</a> }>
								<Modal.Content>
								<ul>
									<li>Product Interactions
										<ul>
											<li>currentlySelectedGender: {JSON.stringify(currentlySelectedGender)}</li>
											<li>currentlySelectedAssociation: {JSON.stringify(currentlySelectedAssociation)}</li>
											<li>currentlySelectedGarments: {JSON.stringify(currentlySelectedGarments)}</li>
											<ul>
												<li>pastProductConditions:</li>
												<ul>{ conditionHistory.map((entry, i) => { return <li key={i}>{JSON.stringify(entry)}</li> })}</ul>
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
									<a onClick={ this.copyJSON } style={{marginLeft: '95%'}}>Copy</a>
								</Modal.Content>
							</Modal>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		);
	}
}
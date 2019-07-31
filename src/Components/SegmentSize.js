import React, { Component } from 'react';

import {
	Segment,
	Header,
	Progress
} from 'semantic-ui-react';

import '../CSS/SegmentSize.css';

class SegmentSize extends Component {
	constructor(props) {
		super(props);

		this.state = {
			segmentSize: 100,
			totalUsers: 2345678,
			//products
			previousSegmentSize: null,
			numberOfGender: null,
			selectedGender: null,
			selectedAssociation: null,
			selectedGarments: [],
			history: [],
			//time
			selectedTimeModifier: null,
			timeHistoryObject: null,
			//technology
			technologyHistoryObject: null,
		}
	}

	//In this hook, values passed in by props will only be defined momentarily
	//so that components can operate optimally in regards to their local state.
	//This requires <SegmentSize/> to save them in its state when they become defined.
	//This enables <SegmentSize/> to make comparisons between current and previous
	//actions without being restricted the prevProps and prevState.

	//Since data from multiple components will be parsed here, actions cannot be
	//accurately measured using prevProps and prevState since the user can toggle
	//between components in addition to changing the order of operations within a component,
	//resulting in props that represent the local state of the component rather than
	//the local state of this component. By this, only prop values will allow null, and state values
	//will track the last iteration of data received.

	//If a change is needed to be detected immediately, it will refer to the value in props,
	//since conditionals requiring a state value will often not detect the state change in
	//time for the code to execute properly. This makes state values behind by 1 render iteration.

	//If a comparison needs to be made between iterations of this component,
	//a comparison between state and props will be made rather than between prevState
	//and prevProps. prevProps and prevState will only be used to indicate that previous props or state
	//does not equal the incoming value, and that the local state needs to save the new value.

	componentDidUpdate = (prevProps, prevState) => {
		const {currentlySelectedGarments, currentlySelectedAssociation, currentlySelectedGender, conditionHistory, removeCurrentProductConditions, lastRemovedHistoryObject, selectedModifier, selectedDay, selectedStartDay, selectedEndDay, selectedDevice, selectedOperatingSystem} = this.props;
		const {segmentSize, selectedGender, selectedAssociation, selectedGarments, history, timeHistoryObject, technologyHistoryObject} = this.state

		//TODO: product section needs to account for use case where user is changing products after time has been set, so that time history stays current
		{/*<--------------------------ProductInteractions: Gender------------------------->*/
		}

		let startPercent;
		let numberOfGenderConditionHistory;
		let genderCoefficient;

		//if a gender has been selected & passed in through props
		if (currentlySelectedGender) {
			//and if that gender does not equal the previously selected gender
			if (currentlySelectedGender != prevProps.currentlySelectedGender) {

				//loads the gender value from <ProductInteraction /> into the local state
				this.setState({
					selectedGender: currentlySelectedGender,
				});
			}
		}

		//if a gender value is passed in
		if (currentlySelectedGender) {
			//assign the genderCoefficient to a percentage that represents the market size
			switch (currentlySelectedGender) {
				case 'Men':
					genderCoefficient = .4444445;
					break;
				case 'Women':
					genderCoefficient = .6666667;
					break;
				case 'Unisex':
					genderCoefficient = .8888889;
					break;
				case 'Boys':
					genderCoefficient = .3333334;
					break;
				case 'Girls':
					genderCoefficient = .3333334;
					break;
				case 'Aliens':
					genderCoefficient = .8787879;
					break;
			}

			//if there is no condition history from props, start percent and number of gender will be maximized
			if (conditionHistory.length == 0) {
				startPercent = 100;
				numberOfGenderConditionHistory = this.state.totalUsers;
			} else {
				//if not, determine their values from their history
				const conditionHistoryCopy = [...conditionHistory];
				const lastConditionHistoryObj = conditionHistoryCopy.pop();
				startPercent = lastConditionHistoryObj.segmentSizeSnapShot;
				numberOfGenderConditionHistory = lastConditionHistoryObj.numberOfGender;
			}

			//calulate the segment size and number of people in the selected gender demographic
			let calculateNumberOfGender = numberOfGenderConditionHistory * genderCoefficient;
			let calculateSegmentSize = startPercent * genderCoefficient;
			const numberOfGender = calculateNumberOfGender.toFixed(0);
			const segmentSize = calculateSegmentSize;


			//save the size of the market and percentage bar figure locally, but pass it to the parent so it can save it to conditionHistory
			//and pass it to <ProductInteractions /> so it can access it
			this.setState({
					numberOfGender,
					segmentSize,
				},
				this.props.retrieveNumberOfGender(numberOfGender),
				this.props.retrieveSegmentSize(segmentSize))
		}


		{/*<--------------------------ProductInteractions: Association------------------------->*/
		}

		//if there is a selectedAssociation, save it locally
		if (currentlySelectedAssociation != prevProps.currentlySelectedAssociation) {
			//load in new values
			this.setState({
				selectedAssociation: currentlySelectedAssociation,
			});
		}


		{/*<--------------------------ProductInteractions: Selected Garments------------------------->*/
		}

		//if currentlySelectedGarments does not equal the previous currentlySelectedGarments, user is making a change to the selected Garments
		if (currentlySelectedGarments.length != prevProps.currentlySelectedGarments.length) {
			let newSegmentSize;

			//load in the new incoming garment items into state
			this.setState({
				selectedGarments: currentlySelectedGarments,
			});

			//if user is adding garments
			if (currentlySelectedGarments.length > prevProps.currentlySelectedGarments.length) {
				//reduce value to 90% of the current value
				newSegmentSize = segmentSize * .9;
				//if user is subtracting
			} else {
				//undo the last calculation by increasing it by 110%
				newSegmentSize = segmentSize / .9;
			}

			if (!currentlySelectedAssociation && currentlySelectedGarments.length == 0) {
				newSegmentSize = segmentSize;
			}

			//set the local state segment size to the value determined above
			this.setState({
				segmentSize: newSegmentSize,
			}, this.props.retrieveSegmentSize(newSegmentSize))
		}


		{/*<--------------------------ProductInteractions: Condition History------------------------->*/
		}

		if (conditionHistory.length != history.length) {

			//if condition history from props is smaller than the value saved from the last iteration, user is removing conditions
			if (conditionHistory.length < history.length) {

				let newSegmentSize = this.state.segmentSize;
				const removedGarments = lastRemovedHistoryObject.selectedGarments;
				const removedGender = lastRemovedHistoryObject.selectedGender;

				removedGarments.map((garment, i) => {
					newSegmentSize = newSegmentSize / .9;
				});

				switch (removedGender) {
					case 'Men':
						newSegmentSize = newSegmentSize / .4444445;
						break;
					case 'Women':
						newSegmentSize = newSegmentSize / .6666667;
						break;
					case 'Unisex':
						newSegmentSize = newSegmentSize / .8888889;
						break;
					case 'Boys':
						newSegmentSize = newSegmentSize / .3333334;
						break;
					case 'Girls':
						newSegmentSize = newSegmentSize / .3333334;
						break;
					case 'Aliens':
						newSegmentSize = newSegmentSize / .8787879;
						break;
				}

				this.setState({
					segmentSize: newSegmentSize,
				}, this.props.retrieveSegmentSize(newSegmentSize))
			}

			this.setState({
				history: conditionHistory,
			});
		}

		{/*<--------------------------ProductInteractions: Current Condition Removal------------------------->*/
		}

		if (removeCurrentProductConditions) {
			//if there is no selectedGender (ie, user removed condition)
			genderCoefficient = 1;

			if (conditionHistory.length > 0) {
				const conditionHistoryCopy = [...conditionHistory];
				const lastConditionHistoryObj = conditionHistoryCopy.pop();
				startPercent = lastConditionHistoryObj.segmentSizeSnapShot;
				numberOfGenderConditionHistory = lastConditionHistoryObj.numberOfGender;
			} else {
				startPercent = 100;
				numberOfGenderConditionHistory = this.state.totalUsers;
			}

			let calculateNumberOfGender = numberOfGenderConditionHistory * genderCoefficient;
			let calculateSegmentSize = startPercent * genderCoefficient;
			const numberOfGender = calculateNumberOfGender.toFixed(0);
			const segmentSize = calculateSegmentSize;

			//save the size of the market and percentage bar figure locally, but pass it to the parent so it can save it to conditionHistory
			//and pass it to <ProductInteractions /> so it can access it
			this.setState({
					numberOfGender,
					segmentSize,
					selectedGarments: [],
					selectedGender: null,
					selectedAssociation: null,
				},
				this.props.retrieveNumberOfGender(numberOfGender),
				this.props.retrieveSegmentSize(segmentSize),
				this.props.retrieveRemoveCurrentConditions())
		}


		{/*<--------------------------Time Restraints------------------------->*/
		}
		if (selectedModifier != prevProps.selectedModifier) {
			let newSegmentSize = this.state.segmentSize;
			let coefficient;
			let segmentSize;
			let modifier;

			if (selectedModifier) {

				const timeHistoryObject = {
					conditionHistory,
					currentConditions: {
						selectedGender,
						selectedAssociation,
						selectedGarments,
					},
					timeSnapShot: {
						selectedModifier,
						selectedDay,
						selectedStartDay,
						selectedEndDay
					}
				};

				this.setState({
					timeHistoryObject,
				})
			}

			modifier = selectedModifier ? selectedModifier : timeHistoryObject.timeSnapShot.selectedModifier;

			switch (modifier) {
				case 'On':
					coefficient = .55555556;
					break;
				case 'Around':
					coefficient = .88888889;
					break;
				case 'Before':
					coefficient = .77777778;
					break;
				case 'Between':
					coefficient = .666666667;
					break;
			}

			segmentSize = selectedModifier ? newSegmentSize * coefficient : newSegmentSize / coefficient;

			this.setState({
				segmentSize,
			});
		}

		{/*<--------------------------Technology Restraints------------------------->*/}


		if (selectedDevice || prevProps.selectedDevice) {

			const newSegmentSize = this.state.segmentSize;
			const oldSegmentSize = technologyHistoryObject ? technologyHistoryObject.technologySnapShot.segmentSize : null;
			const oldSelectedOS = technologyHistoryObject ? technologyHistoryObject.technologySnapShot.selectedOperatingSystem : null;
			const oldSelectedDevice = technologyHistoryObject ? technologyHistoryObject.technologySnapShot.selectedDevice : null;

			let segmentSizeCopy;
			let deviceCoefficient;
			let osCoefficient;
			let device;

			device = selectedDevice ? selectedDevice : oldSelectedDevice;

			switch (device) {
				case 'Computer':
					deviceCoefficient = .6666667;
					break;
				case 'Mobile':
					deviceCoefficient = .8888889;
					break;
			}

			const technologyHistoryObj = {
				conditionHistory,
				currentConditions: {
					selectedGender,
					selectedAssociation,
					selectedGarments
				},
				timeSnapShot: {
					selectedModifier,
					selectedDay,
					selectedStartDay,
					selectedEndDay
				},
				technologySnapShot: {
					selectedDevice,
					selectedOperatingSystem,
					segmentSize: newSegmentSize,
				}
			};

			if (selectedOperatingSystem != prevProps.selectedOperatingSystem) {

				let operatingSystem = selectedOperatingSystem ? selectedOperatingSystem : oldSelectedOS;

				switch (operatingSystem) {
					case 'MacOS':
						osCoefficient = .88888889;
						break;
					case 'Windows':
						osCoefficient = .88888889;
						break;
					case 'Unix':
						osCoefficient = .66666667;
						break;
					case 'Ubuntu':
						osCoefficient = .33333334;
						break;
					case 'Linux':
						osCoefficient = .22222223;
						break;
					case 'iOS':
						osCoefficient = .99999999;
						break;
					case 'Android':
						osCoefficient = .88888889;
						break;
					case 'Bada (Samsung)':
						osCoefficient = .22222223;
						break;
					case 'Blackberry OS':
						osCoefficient = .33333334;
						break;
					case 'Windows Mobile':
						osCoefficient = .44444445;
						break;
				}
				segmentSizeCopy = selectedOperatingSystem ? newSegmentSize * osCoefficient : newSegmentSize / osCoefficient;
			}

			segmentSizeCopy = selectedDevice ? newSegmentSize * deviceCoefficient : oldSegmentSize / deviceCoefficient;

			if (selectedOperatingSystem != prevProps.selectedOperatingSystem || selectedDevice != prevProps.selectedDevice) {
				this.setState({
					technologyHistoryObject: technologyHistoryObj,
					segmentSize: segmentSizeCopy,
				})
			}
		}
	};

	render() {

		const { segmentSize } = this.state;

		return (
				<Segment id={'segment-size'}>
					<Header id={'header'} as={'h4'} style={{fontFamily: 'IBM Plex Sans'}}> Estimated segment size </Header>
					<p style={{fontFamily: 'IBM Plex Sans'}}> % of your total traffic expected to join based on a sample of historical data </p>
					<Progress id={'progress'} color={'green'} size={'medium'} percent={ Number.parseFloat(segmentSize).toFixed(2) } progress/>
				</Segment>
		);
	}
}

export default SegmentSize;
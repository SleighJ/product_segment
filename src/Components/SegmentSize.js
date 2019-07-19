import React, { Component } from 'react';

import {
	Segment,
	Header,
	Progress
} from 'semantic-ui-react';

import '../CSS/SegmentSize.css';

class SegmentSize extends Component {
	constructor(props){
		super(props);

		this.state = {
			segmentSize: 100,
			totalUsers: 2345678,
			//logic
			currentlySelectedGender: null,
			numberOfGender: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { currentlySelectedGarments, currentlySelectedAssociation, currentlySelectedGender, conditionHistory } = this.props;
		const { segmentSize } = this.state;

		let startPercent;
		let numberOfGenderConditionHistory;

		if (currentlySelectedGender) {
			if (currentlySelectedGender != prevProps.currentlySelectedGender) {
				//loads in active values from <ProductInteraction />
				this.setState({
					currentlySelectedGender,
				});

				let genderCoefficient;

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

				if (conditionHistory.length == 0) {
					startPercent = 100;
					numberOfGenderConditionHistory = this.state.totalUsers;
				} else {
					const conditionHistoryCopy = [...conditionHistory];
					const lastConditionHistoryObj = conditionHistoryCopy.pop();
					startPercent = lastConditionHistoryObj.segmentSizeSnapShot;
					numberOfGenderConditionHistory = lastConditionHistoryObj.numberOfGender;
				}

				let calculateNumberOfGender = numberOfGenderConditionHistory * genderCoefficient;
				let calculateSegmentSize = startPercent * genderCoefficient;
				const numberOfGender = calculateNumberOfGender.toFixed(0);
				const segmentSize = calculateSegmentSize.toFixed(0);

				this.setState({
						numberOfGender,
						segmentSize,
					},
				this.props.retrieveNumberOfGender(numberOfGender),
				this.props.retrieveSegmentSize(segmentSize))
			}
		}

		if (currentlySelectedAssociation != prevProps.currentlySelectedAssociation) {
			//load in new values
			this.setState({
				currentlySelectedAssociation,
			});
		}


		//TODO: finish here, adding and subtracting garments on active row
		// if there is a change in number of garments
		if (currentlySelectedGarments.length != prevProps.currentlySelectedGarments.length) {

			//load in the current items into state
			this.setState({
				currentlySelectedGarments,
			});

			let coefficient;
			//if user is adding garments to row
			if (currentlySelectedGarments.length > prevProps.currentlySelectedGarments.length) {
				coefficient = 9;
			} else {
				coefficient = 1.1;
			}

			console.log(segmentSize)

			// let segmentSizeCopy = segmentSize;
			// const calculateSegmentSize = segmentSizeCopy * coefficient;
			// const segmentSize = calculateSegmentSize.toFixed(0);
			// const numberOfGarments = currentlySelectedGarments.length;
			//
			// const jj = numberOfGarments * coefficient
			//
			// console.log(segmentSize, jj)

		}
	};

	render() {

		const { segmentSize, numberOfGender } = this.state;

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
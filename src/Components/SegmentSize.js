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
			previousSegmentSize: null,
			currentlySelectedGender: null,
			numberOfGender: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { currentlySelectedGarments, currentlySelectedAssociation, currentlySelectedGender, conditionHistory } = this.props;
		const { segmentSize, previousSegmentSize } = this.state;

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

		if (currentlySelectedGarments.length != prevProps.currentlySelectedGarments.length) {
			let newSegmentSize;
			//load in the current items into state

			this.setState({
				currentlySelectedGarments,
			});

			//if user is adding
			if (currentlySelectedGarments.length > prevProps.currentlySelectedGarments.length) {
				newSegmentSize = segmentSize * .9;
			//if user is subtracting
			} else {
				newSegmentSize = segmentSize / .9;
			}

			this.setState({
				segmentSize: newSegmentSize,
			})
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
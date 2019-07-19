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
		const {  } = this.state;

		let startPercent;

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
				} else {
					const conditionHistoryCopy = [...conditionHistory];
					const lastConditionHistoryObj = conditionHistoryCopy.pop();
					startPercent = lastConditionHistoryObj.segmentSizeSnapShot;
				}

				let calculateNumberOfGender = this.state.totalUsers * genderCoefficient;
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
			let garmentCoefficient;

			//load in the current items into state
			this.setState({
				currentlySelectedGarments,
			});
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
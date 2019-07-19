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
		const { currentlySelectedGarments, currentlySelectedAssociation, currentlySelectedGender } = this.props;
		const { conditionHistory } = this.state;

		if (currentlySelectedGender) {
			if (currentlySelectedGender != prevProps.currentlySelectedGender) {
				//loads in active values from <ProductInteraction />
				this.setState({
					currentlySelectedGender,
				});

					let genderCoefficient;

					if (!conditionHistory) {
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
					} else {
						//for condition history
						console.log('condition history code needed')
					}

					let calculateNumberOfGender = this.state.totalUsers * genderCoefficient;
					let calculateSegmentSize = this.state.segmentSize * genderCoefficient;

					//if what is saved from the past cycle is not null
					if (this.state.currentlySelectedGender) {
						//if both the current and passed values are defined and do not equal each other, there has been a change
						if (currentlySelectedGender != this.state.currentlySelectedGender) {
							calculateSegmentSize = genderCoefficient * 100;
						}
					}

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

			//TODO: CALCULATE THE NUMBER OF USERS SEARCHING FOR THOSE GARMENTS BY GENDER (ie: state.numberOfGender * coefficients of people who like those garments)

			//
			// if (currentlySelectedGarments.length > prevProps.currentlySelectedGarments.length) {
			// 	garmentCoefficient = 1.1;
			// } else {
			// 	garmentCoefficient = .9;
			// }
			//
			// const calculateSegmentSize = garmentCoefficient * segmentSize;
			// const segmentSize = calculateSegmentSize.toFixed(0);
			//
			// this.setState({
			// 	segmentSize,
			// })
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
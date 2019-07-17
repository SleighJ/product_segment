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
			currentlySelectedGender: null,
			currentlySelectedAssociation: null,
			currentlySelectedGarments: null,
			conditionHistory: null,
			segmentSize: 100,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { currentlySelectedGarments, currentlySelectedAssociation, currentlySelectedGender } = this.props;
		const { conditionHistory } = this.state;

		if (currentlySelectedGender != prevProps.currentlySelectedGender) {

			//loads in active values from <ProductInteraction />
			this.setState({
				currentlySelectedGender,
			});

			if (currentlySelectedGender) {

				if (!conditionHistory) {
					console.log(currentlySelectedGender);


					switch (currentlySelectedGender) {
						case 'Men':
							console.log('Men')
							break;
						case 'Women':
							console.log('women')
							break;
						case 'Unisex':
							console.log('unisex')
							break;
						case 'Boys':
							console.log('boys')
							break;
						case 'Girls':
							console.log('Girls')
							break;
						case 'Aliens':
							console.log('Aliens')
							break;
					}

				}

			}

		}

		if (currentlySelectedAssociation != prevProps.currentlySelectedAssociation) {
			this.setState({
				currentlySelectedAssociation,
			})
		}

		if (currentlySelectedGarments.length != prevProps.currentlySelectedGarments.length) {
			this.setState({
				currentlySelectedGarments,
			})
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
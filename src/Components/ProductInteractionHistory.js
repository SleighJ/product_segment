import React, { Component } from 'react';

import JSON from '../JSON/JSON';
import '../CSS/ProductInteraction.css';

import {
	Grid,
	Dropdown,
	Button,
	Icon,
	Header,
} from 'semantic-ui-react';

class ProductInteractionHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			conditionHistory: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { conditionHistory } = this.props;

		if (conditionHistory != prevProps.conditionHistory) {
			this.setState({
				conditionHistory,
			})
		}
	};

	removeFromHistory = (event, data) => {
		const { id } = data;
		const { conditionHistory } = this.state;
		const conditionHistoryCopy = [...conditionHistory];
		const removedHistoryObject = conditionHistoryCopy[id];

		conditionHistoryCopy.splice(id, 1);


		this.setState({
			conditionHistory: conditionHistoryCopy,
		},
		this.props.retrieveConditionHistory(conditionHistoryCopy),
		this.props.retrieveRemovedHistoryCondition(removedHistoryObject, conditionHistory, conditionHistoryCopy))
	};

	render(){
		const { conditionHistory } = this.state;

		return (
			<Grid.Row id={'product-interaction-master-row'}>
				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column width={12} style={{width: '100%'}}>
						<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans'}}>Product interactions
							<span style={{color: 'lightGrey'}}> - What products have they interacted with? </span>
						</Header>
					</Grid.Column>
				</Grid.Row>

				{ conditionHistory ? conditionHistory.map((row, i) => {

					const selectedGenderHistory = row.selectedGender;
					const selectedAssociationHistory = row.selectedAssociation;
					const selectedGarmentHistory = row.selectedGarments;

					return (
						<Grid.Row key={`product-history-row-${i}`} style={{display: 'flex', paddingTop: '1%'}}>
							<Grid.Column style={{ marginLeft: '-2%', width: '20%'}} width={3}>
								<Dropdown
									disabled={ true }
									placeholder={ selectedGenderHistory }
									fluid
									selection
									style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
								/>
							</Grid.Column>
							<Grid.Column style={{marginLeft: '1%', width: '15%'}} width={3}>
								<Dropdown
									disabled={ true }
									placeholder={ selectedAssociationHistory }
									fluid
									selection
									style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', maxHeight: '40%', display: 'flex' }}
								/>
							</Grid.Column>

							<Grid.Column style={{marginLeft: '1%', width: '55%', textAlign:'left'}} width={3}>
								<Dropdown
									disabled={ true }
									placeholder={ selectedGarmentHistory.join(', ') }
									style={{ fontSize: '12px', width: '100%' }}
									multiple
									selection
								/>
							</Grid.Column>
							<Grid.Column align={'center'} style={{marginLeft: '1%', marginRight: '1%', width: '10%'}} width={3}>
								<Button
									id={i}
									align={'center'}
									onClick={ this.removeFromHistory }
									floated={'right'} size={'tiny'}
									style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '100%'}}
								>
									<Icon align={'center'} style={{paddingLeft: '40%', paddingRight: '50%'}} name={'trash'}></Icon>
								</Button>
							</Grid.Column>
						</Grid.Row>
				)}) : null }
			</Grid.Row>
		)
	}
}

export default ProductInteractionHistory;
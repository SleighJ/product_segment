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

class ProductInteraction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedGender: null,
			selectedAssociation: null,
			selectedGarments: [],
		}
	}

	componentWillUpdate = (prevProps, prevState) => {
		//use state to avoid confusion with <SegmentSize /> using props
		const { selectedGender, selectedAssociation, selectedGarments } = this.state;

		//if selectedGender does not equal the previous value of selectedGender
		if (selectedGender != prevState.selectedGender) {
			const initialAssociation = null;
			const initialGarments = [];

			//set selectedAssociation and SelectedGarments back to their initial values
			this.setState({
				selectedAssociation: initialAssociation,
				selectedGarments: initialGarments,
			}, this.props.retrieveAssociation(initialAssociation), this.props.retrieveSelectedGarments(initialGarments))
		}
	};

	selectGender = (event, data) => {
		const {  value } = data;
		const selectedGender = value;

		this.setState({
			selectedGender,
		}, this.props.retrieveGender(selectedGender))
	};

	selectAssociation = (event, data) => {
		const { value } = data;
		const selectedAssociation = value;

		this.setState({
			selectedAssociation,
		}, this.props.retrieveAssociation(selectedAssociation))
	};

	selectGarments = (event, data) => {
		const { value } = data;
		const selectedGarments = value;

		this.setState({
			selectedGarments,
		}, this.props.retrieveSelectedGarments(selectedGarments))
	};


	removeCurrentSelections = (event, data) => {
		this.setState({
			selectedGender: null,
			selectedAssociation: null,
			selectedGarments: [],
		})
	};
	//this saves input values and passes them to the <ApplicationContainer /> to enter into history
	addProductCondition = () => {
		const { selectedGender, selectedAssociation, selectedGarments } = this.state;

		const conditionHistoryObj = {
			selectedGender,
			selectedAssociation,
			selectedGarments,
		};

		//set selectedGender to null so compWillUpdate will set selectedAssociation and selectedGarments to their initial values and communicate the change with <ApplicationContainer />
		this.setState({
			selectedGender: null,
		});

		this.props.retrieveCondition(conditionHistoryObj);
	};

	render(){

		const { genderArray, associationArray, clothingArr } = JSON;
		const { selectedGender, selectedAssociation, selectedGarments } = this.state;

		return (
				<Grid.Row id={'product-interaction-master-row'}>
					<Grid.Row id={'dropdown-row'} style={{display: 'flex', paddingTop: '1%'}}>
						<Grid.Column style={{ marginLeft: '-2%', width: '20%'}} width={3}>
							<Dropdown
								className={'dropdown'}
								placeholder='Gender'
								fluid
								selection
								style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
								options={ genderArray.map((gender, i) => ({
									key: gender.key,
									text: gender.text,
									value: gender.value,
								})) }
								value={ selectedGender ? selectedGender : null }
								onChange={ this.selectGender }
							/>

							<Button
								floated={'left'}
								size={'tiny'}
								style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', marginBottom: '10%', fontSize: '12px', width: '60%'}}
								disabled={ selectedGender && selectedAssociation && selectedGarments.length > 0 ? false : true }
								onClick={ this.addProductCondition }
							> +More </Button>

						</Grid.Column>
						<Grid.Column style={{marginLeft: '1%', width: '15%'}} width={3}>
							<Dropdown
								className={'dropdown'}
								placeholder='Association'
								fluid
								selection
								style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', maxHeight: '40%', display: 'flex' }}
								disabled={ selectedGender ? false : true }
								options={ associationArray.map((association, i) => ({
									key: association.key,
									text: association.text,
									value: association.value,
								})) }
								value={ selectedAssociation ? selectedAssociation : null }
								onChange={ this.selectAssociation }
							/>
						</Grid.Column>

						<Grid.Column style={{marginLeft: '1%', width: '55%', textAlign:'left'}} width={3}>
							<Dropdown
								placeholder={'Select Item'}
								style={{ fontSize: '12px', width: '100%' }}
								multiple
								selection
								disabled={ selectedGender ? false : true }
								options={ clothingArr.filter(garment => garment.demographic.indexOf(selectedGender) != -1) }
								onChange={ this.selectGarments }
								content={ selectedGarments.map((garment, i) => ({
									key: i,
									text: garment,
									value: garment,
								})) }
								value={ selectedGarments }
							/>
						</Grid.Column>
						<Grid.Column align={'center'} style={{marginLeft: '1%', marginRight: '1%', width: '10%'}} width={3}>
							<Button
								align={'center'}
								onClick={ this.removeCurrentSelections }
								floated={'right'} size={'tiny'}
								style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '100%'}}
							>
								<Icon align={'center'} style={{paddingLeft: '40%', paddingRight: '50%'}} name={'trash'}></Icon>
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid.Row>
		)
	}
}

export default ProductInteraction;
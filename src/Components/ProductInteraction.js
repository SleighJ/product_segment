import React, { Component } from 'react';

import { Grid, Dropdown, Button, Icon, Header, Segment } from 'semantic-ui-react';

import '../CSS/ProductInteraction.css';


class ProductInteraction extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render(){
		return (
				<Grid.Row id={'product-interaction-master-row'}>
					<Grid.Row style={{display: 'flex'}}>
						<Grid.Column width={12} style={{width: '100%'}}>
							<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans'}}>Product interactions
								<span style={{color: 'lightGrey'}}> - What products have they interacted with? </span>
							</Header>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row id={'dropdown-row'} style={{display: 'flex', paddingTop: '1%'}}>
						<Grid.Column style={{ marginLeft: '-2%', width: '20%'}} width={3}>
							<Dropdown
								id={'asdf'}
								className={'dropdown'}
								placeholder='Market'
								fluid
								selection
								style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
								// options={ genderArray }
								// value={ selectedGender ? selectedGender.text : null }
								// onChange={ this.selectGender }
							/>

							<Button
								floated={'left'}
								size={'tiny'}
								style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', fontSize: '12px', width: '60%'}}
								// disabled={ selectedGender && selectedAssociation && selectedGarments.length > 0 ? false : true }
								// onClick={ ()=>this.addProductCondition() }
							> +More </Button>

						</Grid.Column>
						<Grid.Column style={{marginLeft: '1%', width: '15%'}} width={3}>
							<Dropdown
								id={'asdf-1'}
								className={'dropdown'}
								placeholder='Association'
								fluid
								selection
								style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', maxHeight: '40%', display: 'flex' }}
								// disabled={ genderGarments ? false : true }
								// options={ associationArray }
								// onChange={ this.selectAssociation }
							/>
						</Grid.Column>

						<Grid.Column style={{marginLeft: '1%', width: '55%', textAlign:'left'}} width={3}>
							<Dropdown
								id={'asdf-2'}
								placeholder={'Select Item'}
								style={{ fontSize: '12px', width: '100%' }}
								multiple
								selection
								// options={ genderGarments }
								// onChange={ this.selectGarments }
								// content={ selectedGarments.map((garment, i) => ({
								// 	key: i,
								// 	text: garment,
								// 	value: garment,
								// })) }
								// value={ selectedGarments }
							/>
						</Grid.Column>
						<Grid.Column align={'center'} style={{marginLeft: '1%', marginRight: '1%', width: '10%'}} width={3}>
							<Button
								align={'center'}
								// onClick={ this.deleteCurrentProduction }
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
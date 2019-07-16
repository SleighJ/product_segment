import React, { Component } from 'react';

import {
	Grid,
	Header,
	Button,
	Dropdown,
	Segment,
	Icon
} from 'semantic-ui-react';

class TimeOfInteraction extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return (

				<Grid.Row>
					<Grid.Row style={{display: 'flex'}}>
						<Grid.Column style={{width: '120%'}}>
							<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%',}}>Time of interaction <span style={{color: 'lightGrey'}}> - When did this purchase take place? </span> </Header>
						</Grid.Column>

						<Grid.Column style={{width: '80%'}}>
							<Button floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row style={{display: 'flex'}}>
						<Grid.Column style={{padding: '1%', width: '20%'}} width={3}>
							<Dropdown
								placeholder='Interaction'
								fluid
								selection
								style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
								// options={ searchedAndPurchased }
								// onChange={ this.selectProductInteraction }
								// text={ productInteraction ? productInteraction : 'Interaction' }
							/>
						</Grid.Column>
						<Grid.Column style={{padding: '1%', width: '15%'}} width={3}>
							<Dropdown
								placeholder='On'
								fluid
								selection
								style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
								// options={ onAroundAndBefore }
								// onChange={ this.selectOnAroundBefore }
								// text={ timeModifier ? timeModifier : 'On' }
							/>
						</Grid.Column>

						<Grid.Column style={{padding: '1%', width: '65%'}} width={3} align={'left'}>
							{/*{*/}
								{/*this.state.openCalendar ?*/}
									{/*<Calendar*/}
										{/*value={ startDate }*/}
										{/*onChange={ this.handleDateChange }*/}
										{/*maxDate={ startDate }*/}
									{/*/>*/}
									{/*:*/}
									{/*<Button*/}
										{/*content={ formattedDate ? formattedDate : 'Select Date'}*/}
										{/*onClick={ this.openCalendar }/>*/}
							{/*}*/}
						</Grid.Column>
					</Grid.Row>
				</Grid.Row>
		)
	}
}

export default TimeOfInteraction;
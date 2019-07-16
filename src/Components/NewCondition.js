import React, { Component } from 'react';

import {
	Grid,
	Segment,
	Dropdown,
	Button,
	Header,
} from 'semantic-ui-react';


class NewCondition extends Component {
	render(){
		return (
			<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', marginBottom: '3%', boxShadow: 'none', fontFamily: 'IBM Plex Sans', color: 'rgb(68, 68, 68)', border: '1.5px solid lightGrey'}}>

				<Grid.Row style={{display: 'flex', alignItems: 'center', color: 'rgb(68, 68, 68)', margin: '2%'}}>

					<Grid.Column width={4}>
						<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)'}}>Frequency</Header>
					</Grid.Column>

					<Grid.Column width={3} style={{paddingLeft: '8.5%', width: '40%'}}>
						<Dropdown
							className={'dropdown'}
							placeholder='Give Me JSON Or Give Me Death'
							fluid
							selection
							style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
							// onChange={ this.selectFrequency }
						/>
					</Grid.Column>

					<Grid.Column width={9} floated={'right'}>
						<Button
							size={'tiny'}
							style={{fontFamily: 'IBM Plex Sans', border: '1px solid lightGrey', backgroundColor: 'rgb(38, 165, 132)', color: 'white'}}
							// onClick={ this.gimmeJSON }
						>JSON</Button>
					</Grid.Column>

				</Grid.Row>

				{/*<div>*/}
					{/*{this.state.JSON ?*/}
						{/*<div>*/}
							{/*<p>{ JSON.stringify(conditionHistory) }</p>*/}
							{/*<p>{ JSON.stringify(productInteraction) }</p>*/}
							{/*<p>{ JSON.stringify(formattedDate) }</p>*/}
							{/*<p>{ JSON.stringify(selectedDevice) }</p>*/}
							{/*<p>{ JSON.stringify(selectedOperatingSystem) }</p>*/}
						{/*</div>*/}
						{/*:*/}
						{/*null}*/}
				{/*</div>*/}

			</Segment>
		)
	}
}

export default NewCondition;
import React, { Component } from 'react';

import { Grid, Segment, Dropdown, Button, Header, Icon } from 'semantic-ui-react';

class Technology extends Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', boxShadow: 'none', fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey'}}>

				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column style={{width: '120%'}}>
						<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%',}}> Technology <span style={{color: 'lightGrey'}}> - Which device, browser or operating system are they using? </span> </Header>
					</Grid.Column>

					<Grid.Column style={{width: '80%'}}>
						<Button floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'trash'}> </Icon> Delete </Button>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column width={5} style={{padding: '1%', width: '20%'}}>
						<Dropdown
							className={'dropdown'}
							placeholder='Device'
							fluid
							selection
							style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
							// options={devices}
							// onChange={ this.selectDevice }
							// text={ selectedDevice ? selectedDevice : 'Device' }

						/>
					</Grid.Column>
					<Grid.Column style={{padding: '1%', width: '15%'}} width={5}>
						<Dropdown
							placeholder='Uses'
							fluid
							selection
							style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
							// options={deviceModifiers}
							value={ 'Uses' }
						/>
					</Grid.Column>
					<Grid.Column style={{padding: '1%', width: '65%', color: 'lightGrey'}} width={6} align={'left'}>
						<Dropdown
							className={'dropdown'}
							placeholder='Operating System'
							fluid
							selection
						// 	text={ selectedOperatingSystem ? selectedOperatingSystem.value : 'Operating System' }
						// 	style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
						// 	options={ deviceOsOptions ? deviceOsOptions : null }
						// 	onChange={ this.selectOperatingSystem }
						/>
					</Grid.Column>
				</Grid.Row>

			</Segment>
		)
	}
}

export default Technology;
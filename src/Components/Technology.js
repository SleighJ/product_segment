import React, { Component } from 'react';
import JSON from '../JSON/JSON';

import {
	Grid,
	Segment,
	Dropdown,
	Button,
	Header,
	Icon
} from 'semantic-ui-react';

import '../CSS/Technology.css';

class Technology extends Component {
	constructor(props){
		super(props)

		this.state = {
			selectedDevice: null,
			selectedDeviceModifier: null,
			selectedOperatingSystem: null,
		}
	}

	selectDevice = (event, data) => {
		const { value } = data;
		const selectedDevice = value;

		this.setState({
			selectedDevice,
		})
	};

	selectDeviceModifier = (event, data) => {
		const { value } = data;
		const selectedDeviceModifier = value;

		this.setState({
			selectedDeviceModifier,
		})
	};

	selectOperatingSystem = (event, data) => {
		const { value } = data;
		const selectedOperatingSystem = value;

		this.setState({
			selectedOperatingSystem,
		})
	};

	deleteTechnology = () => {
		this.setState({
			selectedDevice: null,
			selectedDeviceModifier: null,
			selectedOperatingSystem: null,
		})
	};

	render() {

		const { devices, operatingSystems, deviceModifiers } = JSON;
		const { selectedDevice, selectedDeviceModifier, selectedOperatingSystem } = this.state;

		return (
			<Segment id={'technology-segment-master'}>

				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column width={12} style={{width: '100%'}}>
						<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans'}}> Technology
							<span style={{color: 'lightGrey'}}> - Which device, browser or operating system are they using? </span>
						</Header>
					</Grid.Column>
					<Grid.Column width={4} style={{width: '100%'}}>
						<Button onClick={ this.deleteTechnology } floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginRight: '2%'}}> <Icon name={'trash'}> </Icon> Delete </Button>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{display: 'flex', padding: '1%', marginBottom: '2%'}}>
					<Grid.Column width={5} style={{ marginLeft: '-2.5%', width: '20%'}}>
						<Dropdown
							className={'dropdown'}
							placeholder='Device'
							fluid
							selection
							style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
							options={devices}
							onChange={ this.selectDevice }
							value={ selectedDevice ? selectedDevice : null }
							// text={ selectedDevice ? selectedDevice : 'Device' }

						/>
					</Grid.Column>
					<Grid.Column style={{marginLeft: '1%', width: '15%'}} width={5}>
						<Dropdown
							placeholder='Using'
							fluid
							selection
							style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
							disabled={ selectedDevice ? false : true }
							options={ deviceModifiers }
							onChange={ this.selectDeviceModifier }
							value={ selectedDeviceModifier ? selectedDeviceModifier : null }
						/>
					</Grid.Column>
					<Grid.Column style={{marginLeft: '1%', width: '55%', textAlign:'left', height: '30%'}} width={6} align={'left'}>
						<Dropdown
							className={'dropdown'}
							style={{fontSize: '12px'}}
							placeholder='Operating System'
							fluid
							selection
							disabled={ selectedDevice ? false : true }
							options={ operatingSystems.filter(system => system.devices == selectedDevice) }
							onChange={ this.selectOperatingSystem }
							value={ selectedOperatingSystem ? selectedOperatingSystem : null}
						/>
					</Grid.Column>
				</Grid.Row>

			</Segment>
		)
	}
}

export default Technology;
import React, { Component, Fragment } from 'react';
import JSON from '../JSON/JSON';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {
	Grid,
	Header,
	Button,
	Dropdown,
	Popup,
	Icon
} from 'semantic-ui-react';

import '../CSS/TimeOfInteraction.css';

class TimeOfInteraction extends Component {
	constructor(props){
		super(props);

		this.oneDate = React.createRef();
		this.startDate = React.createRef();
		this.endDate = React.createRef();

		this.state = {
			openDayPicker: false,
			startDayPicker: false,
			endDayPicker: false,
			selectedModifier: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {

		const { currentlySelectedAssociation } = this.props;

		if (currentlySelectedAssociation != prevProps.currentlySelectedAssociation) {
			this.setState({
				currentlySelectedAssociation,
			})
		}

	};

	toggleDayPicker = () => {
		this.setState({
			openDayPicker: !this.state.openDayPicker,
		})
	};

	selectModifier = (event, data) => {
		const { value } = data;
		const selectedModifier = value;

		this.setState({
			selectedModifier,
		})
	};

	toggleStartDayPicker = () => {
		this.setState({
			startDayPicker: !this.state.startDayPicker,
		})
	};

	toggleEndDayPicker = () => {
		this.setState({
			endDayPicker: !this.state.endDayPicker,
		})
	};

	render() {

		//TODO: fix multiple day pickers on click of left hand date button (because of same ref and click function)

		console.log(this.state)

		const { onAroundAndBefore } = JSON;
		const { selectedModifier } = this.state;

		return (
			<Grid.Row id={'time-of-interaction-master-row'}>
				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column width={12} style={{width: '100%'}}>
						<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans'}}>Time of interaction
							<span style={{color: 'lightGrey'}}> - When did this purchase take place? </span>
						</Header>
					</Grid.Column>
					<Grid.Column style={{width: '80%'}}>
						<Button floated={'right'} size={'tiny'} style={{marginRight: '2%', marginTop: '2%', fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
					</Grid.Column>
				</Grid.Row>


				{ selectedModifier == 'Between' ?


					<Grid.Row style={{display: 'flex', padding: '1%'}}>
						{console.log('1')}
						<Grid.Column style={{marginRight: '2%', width: '25%'}} width={3}>
							<Button style={{width: '100%'}} onClick={ this.toggleStartDayPicker }>Select Date</Button>
						</Grid.Column>
						<Grid.Column width={5}>
							<Fragment>
								<Popup
									context={ this.startDate }
									content={ <DayPicker/> }
									position='right center'
									open={ this.state.startDayPicker }
								/>
								<strong ref={this.startDate}></strong>
							</Fragment>
						</Grid.Column>
						<Grid.Column style={{ marginLeft: '-1%', width: '25%'}} width={3}>
							<Dropdown
								placeholder='On'
								fluid
								selection
								style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
								options={ onAroundAndBefore }
								onChange={ this.selectModifier }
								// text={ timeModifier ? timeModifier : 'On' }
							/>
						</Grid.Column>

						<Grid.Column style={{ marginLeft: '1%', width: '25%'}} width={3}>
							<Button onClick={ this.toggleEndDayPicker } style={{width: '100%'}}>Select Date</Button>
						</Grid.Column>

						<Grid.Column style={{width: '65%'}} width={3}>
							<Fragment>
								<Popup
									style={{ marginTop: '3%' }}
									context={ this.endDate }
									content={ <DayPicker/> }
									position='right center'
									open={ this.state.endDayPicker }
								/>
								<strong ref={ this.endDate }></strong>
							</Fragment>
						</Grid.Column>
					</Grid.Row>
					:
					<Grid.Row style={{ display: 'flex' }}>
						{console.log('2')}
						<Grid.Column style={{ marginLeft: '-1%', width: '20%'}} width={3}>
							<Dropdown
								placeholder='On'
								fluid
								selection
								style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
								options={ onAroundAndBefore }
								onChange={ this.selectModifier }
								// text={ timeModifier ? timeModifier : 'On' }
							/>
						</Grid.Column>

						<Grid.Column style={{ marginLeft: '1%', width: '15%'}} width={3}>
							<Button onClick={ this.toggleDayPicker } style={{width: '100%'}}>Select Date</Button>
						</Grid.Column>

						<Grid.Column style={{width: '65%'}} width={3}>
							<Fragment>
								<Popup
									style={{ marginTop: '3%' }}
									context={ this.oneDate }
									content={ <DayPicker/> }
									position='right center'
									open={ this.state.openDayPicker }
								/>
								<strong ref={ this.oneDate }></strong>
							</Fragment>
						</Grid.Column>
					</Grid.Row>
					}
				</Grid.Row>
		)
	}
}

export default TimeOfInteraction;
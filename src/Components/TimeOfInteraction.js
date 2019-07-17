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

		this.contextRef = React.createRef();

		this.state = {
			openDayPicker: false,
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

	toggleDatePicker = () => {
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

	render() {

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






				<Grid.Row style={{display: 'flex', padding: '1%'}}>

					{ selectedModifier == 'Between' ?

						<Grid.Column style={{ marginLeft: '1%', marginRight: '2%', width: '15%'}} width={3}>
							<Button style={{width: '100%'}}>Select Date</Button>
						</Grid.Column>

					: null }

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
						<Button onClick={ this.toggleDatePicker } style={{width: '100%'}}>Select Date</Button>
					</Grid.Column>

					<Grid.Column style={{width: '65%'}} width={3}>
						<Fragment>
							<Popup
								style={{marginTop: '3%'}}
								context={ this.contextRef }
								content={ <DayPicker/> }
								position='right center'
								open={this.state.openDayPicker}
							/>
							<strong ref={this.contextRef}></strong>
						</Fragment>
					</Grid.Column>
				</Grid.Row>
			</Grid.Row>
		)
	}
}

export default TimeOfInteraction;
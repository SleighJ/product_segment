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
var moment = require('moment');

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
			formattedSelectedDay: null,
			selectedStartDay: null,
			selectedEndDay: null,
			betweenModifier: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { selectedModifier, selectedStartDay } = this.state;

		if (prevState.selectedModifier != selectedModifier) {
			if (prevState.selectedModifier) {
				this.setState({
					formattedSelectedDay: null,
					selectedStartDay: null,
					selectedEndDay: null,
				})
			}
		}
	};

	selectModifier = (event, data) => {
		const { value } = data;
		const selectedModifier = value;

		this.setState({
			selectedModifier,
		}, this.props.retrieveSelectedModifier(selectedModifier))
	};

	toggleDayPicker = () => {
		this.setState({
			openDayPicker: !this.state.openDayPicker,
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

	selectOneDate = (selectedDay) => {
		const formattedSelectedDay = moment(selectedDay).format('MM-DD-YYYY');

		this.setState({
			formattedSelectedDay,
		}, this.toggleDayPicker(), this.props.retrieveDate(formattedSelectedDay))
	};

	selectStartDate = (selectedDay) => {
		const selectedStartDay = moment(selectedDay).format('MM-DD-YYYY');

		this.setState({
			selectedStartDay,
			betweenModifier: selectedDay,
		}, this.toggleStartDayPicker(), this.props.retrieveStartDate(selectedStartDay))
	};

	selectEndDate = (selectedDay) => {
		const selectedEndDay = moment(selectedDay).format('MM-DD-YYYY');

		this.setState({
			selectedEndDay,
		}, this.toggleEndDayPicker(), this.props.retrieveEndDate(selectedEndDay))
	};

	removeTimePeriod = () => {
		this.setState({
			formattedSelectedDay: null,
			selectedStartDay: null,
			selectedEndDay: null,
			openDayPicker: false,
			toggleStartDayPicker: false,
			toggleEndDayPicker: false,
			selectedModifier: null,
		},
			this.props.retrieveSelectedModifier(null),
			this.props.retrieveDate(null),
			this.props.retrieveStartDate(null),
			this.props.retrieveEndDate(null)
		)
	};

	render() {
		const {
			selectedModifier,
			formattedSelectedDay,
			selectedStartDay,
			selectedEndDay,
			betweenModifier
		} = this.state;

		const { onAroundAndBefore } = JSON;

		return (
			<Grid.Row id={'time-of-interaction-master-row'}>
				<Grid.Row style={{display: 'flex'}}>
					<Grid.Column width={12} style={{width: '100%'}}>
						<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans'}}>Time of interaction
							<span style={{color: 'lightGrey'}}> - When did this purchase take place? </span>
						</Header>
					</Grid.Column>
					<Grid.Column style={{width: '80%'}}>
						<Button onClick={ this.removeTimePeriod } floated={'right'} size={'tiny'} style={{marginRight: '2%', marginTop: '2%', fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
					</Grid.Column>
				</Grid.Row>

				{ selectedModifier == 'Between' ?

					<Grid.Row style={{display: 'flex', padding: '1%'}}>
						<Grid.Column style={{marginRight: '2%', width: '25%'}} width={3}>
							<Button style={{width: '100%'}} onClick={ this.toggleStartDayPicker }>{ selectedStartDay ? selectedStartDay : 'Select Start' }</Button>
						</Grid.Column>
						<Grid.Column width={5}>
							<Fragment>
								<Popup
									context={ this.startDate }
									content={
										<DayPicker
											onDayClick={ this.selectStartDate }
											selectedDays={ selectedStartDay }
											disabledDays={ betweenModifier ? betweenModifier.before : null }
										/>
									}
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
								value={ 'Between' }
							/>
						</Grid.Column>

						<Grid.Column style={{ marginLeft: '1%', width: '25%'}} width={3}>
							<Button disabled={ selectedStartDay ? false : true } onClick={ this.toggleEndDayPicker } style={{width: '100%'}}>{ selectedEndDay ? selectedEndDay : 'Select End' }</Button>
						</Grid.Column>

						<Grid.Column style={{width: '65%'}} width={3}>
							<Fragment>
								<Popup
									style={{ marginTop: '3%' }}
									context={ this.endDate }
									content={
										<DayPicker
											onDayClick={ this.selectEndDate }
											selectedDays={ selectedEndDay }
											disabledDays={{ before: betweenModifier }}
										/>
									}
									position='right center'
									open={ this.state.endDayPicker }
								/>
								<strong ref={ this.endDate }></strong>
							</Fragment>
						</Grid.Column>
					</Grid.Row>
					:
					<Grid.Row style={{ display: 'flex' }}>
						<Grid.Column style={{ marginLeft: '-1%', width: '20%'}} width={3}>
							<Dropdown
								placeholder='Select'
								fluid
								selection
								style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
								options={ onAroundAndBefore }
								onChange={ this.selectModifier }
								value={ selectedModifier ? selectedModifier : null }
							/>
						</Grid.Column>

						<Grid.Column style={{ marginLeft: '1%', width: '15%'}} width={3}>
							<Button disabled={ selectedModifier ? false : true } onClick={ this.toggleDayPicker } style={{width: '100%'}}>{ formattedSelectedDay ? formattedSelectedDay : 'Select Date' }</Button>
						</Grid.Column>

						<Grid.Column style={{width: '65%'}} width={3}>
							<Fragment>
								<Popup
									style={{ marginTop: '3%' }}
									context={ this.oneDate }
									content={ <DayPicker
										onDayClick={ this.selectOneDate }
									/> }
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
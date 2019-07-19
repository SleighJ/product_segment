import React, { Component } from 'react';
import ResponsiveStream from './Graph';

import {
	Grid,
	Segment,
	Button,
	Header,
	Icon,
	Modal,
} from 'semantic-ui-react';

import '../CSS/NewCondition.css';

const data = [
	{
		"Raoul": 24,
		"Josiane": 84,
		"Marcel": 61,
		"René": 156,
		"Paul": 47,
		"Jacques": 65
	},
	{
		"Raoul": 180,
		"Josiane": 37,
		"Marcel": 61,
		"René": 71,
		"Paul": 68,
		"Jacques": 173
	},
	{
		"Raoul": 106,
		"Josiane": 90,
		"Marcel": 188,
		"René": 133,
		"Paul": 35,
		"Jacques": 166
	},
	{
		"Raoul": 177,
		"Josiane": 74,
		"Marcel": 71,
		"René": 156,
		"Paul": 26,
		"Jacques": 174
	},
	{
		"Raoul": 18,
		"Josiane": 27,
		"Marcel": 166,
		"René": 56,
		"Paul": 102,
		"Jacques": 151
	},
	{
		"Raoul": 167,
		"Josiane": 57,
		"Marcel": 123,
		"René": 19,
		"Paul": 115,
		"Jacques": 10
	},
	{
		"Raoul": 169,
		"Josiane": 108,
		"Marcel": 187,
		"René": 59,
		"Paul": 168,
		"Jacques": 23
	},
	{
		"Raoul": 84,
		"Josiane": 168,
		"Marcel": 46,
		"René": 108,
		"Paul": 52,
		"Jacques": 92
	},
	{
		"Raoul": 183,
		"Josiane": 26,
		"Marcel": 14,
		"René": 103,
		"Paul": 154,
		"Jacques": 31
	}
];


class NewCondition extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<Segment id={'new-condition-master-segment'}>
				<Grid.Row style={{display: 'flex', alignItems: 'center', color: 'rgb(68, 68, 68)', margin: '2%'}}>
					<Grid.Column width={4}>
						<Header id={'header'} as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', color: 'rgb(88, 88, 88)'}}>Data Representation</Header>
					</Grid.Column>

					<Grid.Column width={9} floated={'right'}>
						<Modal
							trigger={<Button
										size={'tiny'}
										style={{fontFamily: 'IBM Plex Sans', backgroundColor: 'rgb(38, 165, 132)', color: 'white'}}
									  >
										<Icon name={'database'}/> Analyze
									</Button>}
						>
							<Modal.Header>Woah, its a graph</Modal.Header>
							<Modal.Content>
								<div style={{width: '400px', height: '400px'}}>
									<ResponsiveStream
										data={ data }
									/>
								</div>
							</Modal.Content>
						</Modal>
					</Grid.Column>

				</Grid.Row>
			</Segment>
		)
	}
}

export default NewCondition;
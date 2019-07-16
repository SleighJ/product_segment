import React from 'react';

import ApplicationContainer from './Containers/ApplicationContainer';
import ApplicationHeader from './Containers/ApplicationHeader';
import ApplicationTopBar from './Containers/ApplicationTopBar';
import ApplicationSideBar from './Containers/ApplicationSidebar';

import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div style={{ backgroundColor: 'rgb(242, 243, 243)' }}>

        <ApplicationHeader />
        <ApplicationTopBar />
        <ApplicationSideBar />

		<Grid style={{ paddingLeft: '13.5%'}}>
            <Grid.Row className='App-Container-Row-1' style={{margin: '2%'}}>
                <Grid.Column>
                    <ApplicationContainer />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>
  );
}

export default App;

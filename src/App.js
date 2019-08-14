import React from 'react';
import youtube from './api/youtube'
import { Grid } from '@material-ui/core';

class App extends React.Component {
	render() {
      return (
        <Grid style={{ justifyContent: 'center' }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spaciyng={10}>
              <Grid item xs={12}>
              	{/* This is where SearchBar component will go */}
              </Grid>
              <Grid item xs={8}>
              	{/* This is where VideoDetail component will go */}
              </Grid>
              <Grid item xs={4}>
              	{/* This is where VideoList component will go */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
}

export default App;
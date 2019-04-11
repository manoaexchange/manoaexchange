import React from 'react';
import { Grid, Button, Image, Divider } from 'semantic-ui-react';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export default class MessageHead extends React.Component {
  render() {
    const msgTitleMargin = { margin: '10px' };
    return (
        <div>
          <Grid centered style={msgTitleMargin}>
            <h2>Messages from Katherine Piniol</h2>
            <div className='ui two buttons'>
              <Button color='teal'>
                Profile
              </Button>
              <Button color='red'>
                Report
              </Button>
            </div>
          </Grid>
          <Image src='/images/piniolkimg.png' size='tiny' centered/>
          <Divider/>
        </div>
    );
  }
}

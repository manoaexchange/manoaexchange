import React from 'react';
import { Grid, Button, Image, Divider } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export default class MessageHead extends React.Component {
  render() {
    const msgTitleMargin = { margin: '10px' };
    return (
        <div>
          <Grid centered style={msgTitleMargin}>
            <h2>Messages from Katherine Piniol</h2>
            <div className='ui two buttons'>
              <Button color='teal' as={NavLink} activeClassName="" exact to="/profile">
                Profile
              </Button>
              <Button color='red' as={NavLink} activeClassName="" exact to={`/notify/${this.props.messages.name}`}>
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

MessageHead.propTypes = {
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

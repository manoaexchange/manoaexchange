import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import PropTypes from 'prop-types';

export default class ProfileDescription extends React.Component {

  render() {
    return (
        <div>
          <h2>Katherine Piniol</h2>
          <Image src={'/images/piniolkimg.png'} size='medium' inline/>
          <p>
            <Button color='red' centered as={NavLink} activeClassName="" exact to="/notify">
              Report
            </Button>
            <p>Email: sample@sample.com</p>
          </p>
          <Button floated='right' as={NavLink} activeClassName="" exact to="/editprofile">Edit Profile</Button>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileDescription.propTypes = {
  contact: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

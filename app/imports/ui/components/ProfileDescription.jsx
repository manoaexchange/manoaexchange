import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import PropTypes from 'prop-types';

export default class ProfileDescription extends React.Component {

  render() {
    return (
        <div>
          <h2>{this.props.profiles.name}</h2>
          <Image src={this.props.profiles.imageurl} size='medium' inline/>
          <p>
            <Button color='red' centered as={NavLink} activeClassName="" exact to="/notify">
              Report
            </Button>
            <p>{this.props.profiles.owner}</p>
            <p>{this.props.profiles.phone}</p>
          </p>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileDescription.propTypes = {
  profiles: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

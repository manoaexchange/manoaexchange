import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Input, Container, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavMenu extends React.Component {
  render() {
    return (
        <div>
          <Menu className='fixed menu navMenu'>
            <Container>
              <Menu.Item as{NavLink} to='/'><Icon name='home'/></Menu.Item>
              <Menu.Item>Categories</Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search'/>
              </Menu.Item>
              <Menu.Item position='right'>Sign In</Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}

/** Declare the types of all properties. */
NavMenu.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavMenuContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavMenu);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavMenuContainer);

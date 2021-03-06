import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#FBF3EB' };
    return (
        <Menu style={menuStyle} attached="top" borderless>
          <Container>
            {this.props.currentUser === '' ? (
                <Menu.Item icon='home' as={NavLink} activeClassName="" exact to="/"></Menu.Item>
            ) : (
                <Menu.Item icon='home' as={NavLink} activeClassName="" exact to="/home"></Menu.Item>
            )}
            <Menu.Item icon='search' position='right' as={NavLink} activeClassName="active" exact to="/categories"
                       key='category'></Menu.Item>
            {this.props.currentUser ? (
                [<Menu.Item icon='edit' as={NavLink} activeClassName="active" exact to="/add" key='add'></Menu.Item>]
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item icon='clipboard' as={NavLink} activeClassName="active" exact to="/admin"
                           key='admin'></Menu.Item>
            ) : ''}
            <Menu.Item>
              {this.props.currentUser === '' ? (
                  <Dropdown text="Login" pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                      <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon='user' text="Profile" as={NavLink} activeClassName="active" exact
                                     to="/profile" key='list'>
                      </Dropdown.Item>
                      <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);

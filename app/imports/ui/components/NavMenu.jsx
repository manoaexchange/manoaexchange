import React from 'react';
import { Menu, Input, Container, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
export default class NavMenu extends React.Component {
  render() {
    return (
        <div>
          <Menu borderless attached='top' className='menu navMenu'>
            <Container>
              <Menu.Item as={NavLink} activeClassName="" exact to="/"><Icon name='home'/></Menu.Item>
              <Menu.Item>
                <Input style={{ width: '650px' }} icon='search' placeholder='Search'/>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/CATEGORIES">Categories</Menu.Item>
              <Menu.Item position='right' as={NavLink} activeClassName="" exact to="/signin">Sign In</Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}

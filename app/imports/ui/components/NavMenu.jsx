import React from 'react';
import { Menu, Input, Container, Icon } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
export default class NavMenu extends React.Component {
  render() {
    return (
        <div>
          <Menu className='fixed menu navMenu'>
            <Container>
              <Menu.Item><Icon name='home'/></Menu.Item>
              <Menu.Item>Categories</Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search'/>
              </Menu.Item>
              <Menu.Item position='right'>Sign In</Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Menu, Image, Icon, Grid, List, Form, Input, } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image
            src="//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749"
            alt="logo" centered
        />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (

        <Menu className="ui borderless middlemenu menu">
          <Container className="ui centered grid container">
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>KIDS</Menu.Item>

            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>SEARCH</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image
            src="//scontent.cdninstagram.com/vp/e384bd8eeb83e6f57db412888e515ab9/5D037755/t51.2885-15/sh0.08/e35/s640x640/50140767_546264022542569_216513970196892597_n.jpg?_nc_ht=scontent.cdninstagram.com"
            alt="shave ice" fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Container fluid className="black-background">
          <Grid container columns={3}>
            <Grid.Column>
              Navigation
              <hr/>
              <List>
                <Menu.Item fitted>About us</Menu.Item>
                <Menu.Item fitted>Videos</Menu.Item>
                <Menu.Item fitted>Store locations</Menu.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Menu
              <hr/>
              <List>
                <Menu.Item fitted>Men</Menu.Item>
                <Menu.Item fitted>Women</Menu.Item>
                <Menu.Item fitted>KIDS</Menu.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Connect
              <hr/>
              <List>
                <Menu.Item fitted>Sign up for the latest updates</Menu.Item>
                <Form>
                  <Form.Field>
                    <label>User Input</label>
                    <Input action='Join' placeholder='Enter Email Address'/>
                  </Form.Field>
                </Form>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <IslandSnow/>
    , document.getElementById('root'));
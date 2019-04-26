import React from 'react';
import { Grid, Container, Card, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Stuffs } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

class Categories extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div>
          <Container>
            <Grid centered columns={3}>
              <h1 className='CategoriesPageTitle'>Categories</h1>
            </Grid>
            <div className='CategoriesPagesBox CategoriesPageTitle fauxBoxShadow'>
              <Card.Group>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList" category={lamp}>
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>LAMPS</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList" category={pillow}>
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>PILLOWS</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList" category={plate}>
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>PLATES</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList" category={utensil}>
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>UTENSILS</h2>
                    </Grid>
                  </div>
                </Card>
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Categories.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Categories);

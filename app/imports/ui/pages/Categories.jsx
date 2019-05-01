import React from 'react';
import { Grid, Container, Card, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

class Categories extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting Data</Loader>;
  }

  renderPage() {
    let categoryList = this.props.items.map(obj => obj.category);
    categoryList = _.uniq(categoryList);
    return (
        <div>
          <Container>
            <Grid centered columns={3}>
              <h1 className='CategoriesPageTitle'>Categories</h1>
            </Grid>
            <div className='CategoriesPagesBox CategoriesPageTitle fauxBoxShadow'>
              <Card.Group>
                {
                  categoryList.map((category, index) => <Card centered as={NavLink} activeClassName="" exact
                                                              to={`/categoryList/${category}`}
                                                              key={index}v>
                        <div className='CategoryBox fauxBoxShadow'>
                          <Grid centered>
                            <h2>{category}</h2>
                          </Grid>
                        </div>
                      </Card>)}
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Items documents in the props. */
Categories.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Items documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Categories);

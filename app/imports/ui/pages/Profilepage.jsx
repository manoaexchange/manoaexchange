import React from 'react';
import { Grid, Segment, Container, Divider, Loader } from 'semantic-ui-react';
import ProfileProductsOffered from '../components/ProfileProductsOffered';
import ProfileDescription from '../components/ProfileDescription';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';

class Profilepage extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className='generalPageMargin'>
          <Grid centered columns={3}>
            <Segment className='profile desc box'>
              <Container>
                <div>
                  <h1>Profile Page</h1>
                  <ProfileDescription/>
                  <Divider inverted/>
                  <ProfileProductsOffered/>
                </div>
              </Container>
            </Segment>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profilepage.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profilepage);

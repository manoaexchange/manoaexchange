import React from 'react';
import { Grid, Loader, Header, Container } from 'semantic-ui-react';
import { Profiles, ProfileSchema } from '/imports/api/profile/profile';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/** Renders the Page for editing a single document. */
class EditProfilepage extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, imageurl, email, _id, owner } = data;
    Profiles.update(_id, owner, { $set: { name, imageurl, email } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' }) && <Redirect to="/home"/>));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <div className='generalPageMargin'>
          <Container>
            <div className='fauxBoxShadow profile desc box'>
              <Grid centered>
                <Grid.Column>
                  <Header as="h2" textAlign="center">Edit Profile</Header>
                  <AutoForm schema={ProfileSchema} onSubmit={this.submit} model={this.props.doc}>
                    <TextField name='imageurl'/>
                    <TextField name='phone'/>
                    <TextField name='name'/>
                    <SubmitField value='Submit'/>
                    <ErrorsField/>
                    <HiddenField name='owner' value={this.props.owner}/>
                    <HiddenField name='contactId' value={this.props.owner._id}/>
                  </AutoForm>
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require the presence of Profiles document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfilepage.propTypes = {
  owner: PropTypes.string.isRequired,
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Profiles documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    doc: Profiles.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditProfilepage);

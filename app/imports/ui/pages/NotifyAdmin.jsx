import React from 'react';
import { Reports, ReportSchema } from '/imports/api/reports/reports';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Grid, Header, Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';

/** Renders the Page for adding a document. */
class Notify extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, report, message } = data;
    const owner = Meteor.user().username;
    Reports.insert({ name, report, message, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div className='generalPageMargin'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Report an issue</Header>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ReportSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='name'/>
                  <SelectField name='report'/>
                  <TextField name='message'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value='fakeuser@foo.com'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Notify;

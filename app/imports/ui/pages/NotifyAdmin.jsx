import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react'

const issueOptions = [
  { key: 'b', text: 'Report a bug', value: 'nug' },
  { key: 'i', text: 'Report inappropriate behavior', value: 'behavior' },
];

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
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Container className='notifyAdmin'>
          <h1>Report an Issue</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
              />
              <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
              />
              <Form.Field
                  control={Select}
                  options={issueOptions}
                  label={{ children: 'Issue', htmlFor: 'form-select-control-gender' }}
                  placeholder='Select'
                  search
                  searchInput={{ id: 'form-select-control-gender' }}
              />
            </Form.Group>
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Comments'
                placeholder='Any other issues here'
            />
            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Submit'
            />
          </Form>
        </Container>
    );
  }
}

export default Notify;

import React from 'react';
import { Items, ItemSchema } from '/imports/api/stuff/items';
import { Grid, Header, Container } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddItem extends React.Component {

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
      Bert.alert({ type: 'success', message: 'Add successful, would you like to add another?' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { item, category, quantity, condition, image, description } = data;
    const owner = Meteor.user().username;
    Items.insert({ item, category, quantity, condition, image, description, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div className='generalPageMargin'>
        <Container>
        <div className='CategoriesPagesBox fauxBoxShadow'>
          <Grid centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">List an item for sale</Header>
              <AutoForm ref={(ref) => {
                this.formRef = ref;
              }} schema={ItemSchema} onSubmit={this.submit}>
                  <TextField name='item'/>
                  <LongTextField name='description'/>
                  <TextField name='image'/>
                  <TextField name='category'/>
                  <NumField name='quantity' decimal={false}/>
                  <SelectField name='condition'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value='fakeuser@foo.com'/>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
        </Container>
        </div>
    );
  }
}

export default AddItem;

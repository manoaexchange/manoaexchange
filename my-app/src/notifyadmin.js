import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const issueOptions = [
  { key: 'b', text: 'Report a bug', value: 'nug' },
  { key: 'i', text: 'Report inappropriate behavior', value: 'behavior' },
];

const Notify = () => (
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
)

export default Notify
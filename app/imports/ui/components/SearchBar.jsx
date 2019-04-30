import React from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class ProfileProductsOffered extends React.Component {
  state = { search: '', submittedSearch: '' /** , redirectToReferer: false */ }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { search } = this.state;
    this.setState({ submittedSearch: search /** , redirectToReferer: true */ });
  }

  render() {
    const { search } = this.state;
    /**
    if (this.state.redirectToReferer) {
      return <Redirect to={`/search/${this.submittedSearch}`}/>;
    } */
    return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                  placeholder='search'
                  name='search'
                  value={search}
                  onChange={this.handleChange}
              />
              <Form.Button content='Submit' />
            </Form.Group>
          </Form>
        </div>
    );
  }
}

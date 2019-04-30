import React from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class ProfileProductsOffered extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = { search: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSearch() {
    const search = this.state;
    return <Redirect to={`/search${search}`}/>;
  }

  render() {
    const search = this.state;
    return (
        <div>
          {/** <Input style={{ width: '650px' }}
           name="search"
           type="search"
           action="search"
           content="click"
           onSubmit={this.handleSearch}
           onClick={this.handleSearch}
           placeholder='Search'/> */}
          <Form onSubmit={this.handleSearch}>
            <Form.Group>
              <Form.Input
                  name='search'
                  value={search}
                  placeholder='Search'
                  onChange={this.handleChange}
              />
              <Form.Button content='Submit'/>
            </Form.Group>
          </Form>
        </div>
    );
  }
}

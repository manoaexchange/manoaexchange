import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AdminPage extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.reports.name}</Table.Cell>
          <Table.Cell>{this.props.reports.issue}</Table.Cell>
          <Table.Cell>{this.props.reports.message}</Table.Cell>
          <Table.Cell>{this.props.reports.owner}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.reports._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
AdminPage.propTypes = {
  reports: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(AdminPage);
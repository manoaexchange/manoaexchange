import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Reports } from '/imports/api/reports/reports';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    /* eslint-disable-next-line */
    const result = confirm('Delete this item?');
    if (result) {
      Reports.remove(this.props.reports._id, this.deleteCallback);
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.reports.owner}</Table.Cell>
          <Table.Cell>{this.props.reports.name}</Table.Cell>
          <Table.Cell>{this.props.reports.reportType}</Table.Cell>
          <Table.Cell>{this.props.reports.message}</Table.Cell>
          <Table.Cell>
            <Button basic onClick={this.onClick}>Delete</Button>
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

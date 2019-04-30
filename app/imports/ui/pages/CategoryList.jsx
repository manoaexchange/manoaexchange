import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, /** Card, Dropdown, Grid, */ Table, Image } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// import Product from '/imports/ui/components/Product';

const allItems = Items.find({});

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  state = {
    column: null,
    data: allItems,
    direction: null,
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: data.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { column, data, direction } = this.state;
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as='h2' textAlign='center'>CategoryNameHere</Header>
            <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
              <Table sortable basic='very' celled fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                        sorted={column === 'item' ? direction : null}
                        onClick={this.handleSort('item')}
                    >
                      Name
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'image' ? direction : null}
                        onClick={this.handleSort('image')}
                    >
                      Image
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'category' ? direction : null}
                        onClick={this.handleSort('category')}
                    >
                      Category
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'condition' ? direction : null}
                        onClick={this.handleSort('condition')}
                    >
                      Condition
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'quantity' ? direction : null}
                        onClick={this.handleSort('quantity')}
                    >
                      Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'description' ? direction : null}
                        onClick={this.handleSort('description')}
                    >
                      Description
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'owner' ? direction : null}
                        onClick={this.handleSort('owner')}
                    >
                      Owner
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map((item) => (

                      <Table.Row key={item}>
                        <Table.Cell>{item.item}</Table.Cell>
                        <Table.Cell><Image size='small' src={item.image}/></Table.Cell>
                        <Table.Cell>{item.category}</Table.Cell>
                        <Table.Cell>{item.condition}</Table.Cell>
                        <Table.Cell>{item.quantity}</Table.Cell>
                        <Table.Cell>{item.description}</Table.Cell>
                        <Table.Cell>{item.owner}</Table.Cell>
                      </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CategoryList.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Items documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoryList);

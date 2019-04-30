import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, /** Card, Dropdown, */ Grid, Table, Image, Button } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  allItems = Items.find().fetch();

  tableData = [
    {
      item: 'Basket',
      description: 'nice',
      quantity: 3,
      category: 'Furniture',
      owner: 'john@foo.com',
      image: 'https://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-170.jpg',
      condition: 'excellent',
    },
    {
      item: 'Straw Basket',
      description: 'A Basket',
      quantity: 1,
      category: 'Storage',
      owner: 'sample@sample.com',
      image: 'https://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-170.jpg',
      condition: 'good',
    },
    {
      item: 'Desk Lamp',
      description: 'Unwanted lamp',
      quantity: 1,
      category: 'Appliance',
      owner: 'john@foo.com',
      image: 'https://www.publicdomainpictures.net/pictures/200000/nahled/desk-lamp-1475958733bLG.jpg',
      condition: 'good',
    },
    {
      item: 'Desk Lamps',
      description: 'I&apos;m graduating and no longer have a use for this. I&apos;m planning on selling it for $20.',
      quantity: 2,
      category: 'Appliance',
      owner: 'admin@foo.com',
      image: 'https://www.publicdomainpictures.net/pictures/200000/nahled/desk-lamp-1475958733bLG.jpg',
      condition: 'good',
    },
  ];

  state = {
    column: null,
    data: this.tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { column, data, direction } = this.state;
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as='h2' textAlign='center'>{this.props.docId}</Header>
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
                    <Table.HeaderCell>
                      Image
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
                    <Table.HeaderCell>
                      Description
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'owner' ? direction : null}
                        onClick={this.handleSort('owner')}
                    >
                      Owner
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Links
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map((item, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>{item.item}</Table.Cell>
                        <Table.Cell><Image size='small' src={item.image}/></Table.Cell>
                        <Table.Cell>{item.condition}</Table.Cell>
                        <Table.Cell>{item.quantity}</Table.Cell>
                        <Table.Cell>{item.description}</Table.Cell>
                        <Table.Cell>{item.owner}</Table.Cell>
                        <Table.Cell><Grid centered>
                          <Button color='red' as={NavLink} activeClassName=""
                                  exact to={`/notify/${item._id}`}>
                            Report
                          </Button>
                          <Button color='teal' floated='right' as={NavLink} activeClassName=""
                                  exact to='/message'>
                            Message
                          </Button>
                        </Grid>
                        </Table.Cell>
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
  docId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Items documents.
  const subscription = Meteor.subscribe('Items');
  return {
    docId: documentId,
    items: Items.find({ category: documentId }).fetch(),
    ready: subscription.ready(),
  };
})(CategoryList);

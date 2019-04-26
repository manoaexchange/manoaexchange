import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const CreateItem = () => (
    <Card centered>
      <Image src='' />Image here
      <Card.Content>
        <Card.Header>Seller: Matt</Card.Header>
        <Card.Meta>
          <span className='date'>Created on current date</span>
        </Card.Meta>
        <Card.Description>
          This is an almost new item
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='simmilar items' />
          10 listed
        </a>
      </Card.Content>
    </Card>
)

export default CreateItem

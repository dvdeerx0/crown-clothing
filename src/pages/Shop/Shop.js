import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from './SHOP_DATA';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {
          collections
            .map(({ id, ...otherCollectionProps }) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
      </div>
    )
  }
};

export default ShopPage;

import React from 'react';
import { ListView, Text } from 'react-native';
import _ from 'lodash';

import Book from './Book';

const Category = ({ category }) => {
  let element;

  if (!_.isEmpty(category)) { // if data is available
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const data = ds.cloneWithRows(category.results.books);

    element = (
      <ListView
        dataSource={data}
        enableEmptySections
        renderRow={(book) => <Book {...book} />}
      />
    );
  } else { // if data is not available
    element = (
      <Text>Loading</Text>
    );
  }

  return element;
};

Category.propTypes = {
  category: React.PropTypes.object.isRequired,
};

export default Category;

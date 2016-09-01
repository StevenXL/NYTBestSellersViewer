import React from 'react';
import { ListView, Text, View } from 'react-native';
import _ from 'lodash';
import { camelizeKeys } from 'humps';
import styles from '../../common/styles';

import Book from './Book';

const Category = ({ category }) => {
  let element;

  if (!_.isEmpty(category)) { // if data is available
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const camelCasedBooks = camelizeKeys(category.results.books);
    const data = ds.cloneWithRows(camelCasedBooks);

    element = (
      <ListView
        style={[styles.backgroundColor, styles.marginLeftTen, styles.marginTopTwenty]}
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

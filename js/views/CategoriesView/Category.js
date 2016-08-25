import React from 'react';
import { View, Text } from 'react-native';

const Category = ({
  displayName,
  listName,
  listNameEncoded,
}) =>
  <View>
    <Text>
      {displayName}{'\n'}
    </Text>
    <Text>
      {listName}{'\n'}
    </Text>
    <Text>
      {listNameEncoded}{'\n'}
    </Text>
  </View>;

Category.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  listName: React.PropTypes.string.isRequired,
  listNameEncoded: React.PropTypes.string.isRequired,
};

export default Category;

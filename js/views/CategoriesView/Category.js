import React from 'react';
import { View, Text } from 'react-native';

const Category = ({
  displayName,
}) =>
  <View>
    <Text>
      {displayName}{'\n'}
    </Text>
  </View>;

Category.propTypes = {
  displayName: React.PropTypes.string.isRequired,
};

export default Category;

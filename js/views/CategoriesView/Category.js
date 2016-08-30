import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Category = ({ displayName, onCategoryClick }) =>
  <TouchableHighlight
    onPress={onCategoryClick}
  >
    <View>
      <Text>
        {displayName}{'\n'}
      </Text>
    </View>
  </TouchableHighlight>;

Category.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  onCategoryClick: React.PropTypes.func.isRequired,
};

export default Category;

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Category = ({
  displayName,
}) =>
  <TouchableHighlight onPress={() => console.log('hello')}>
    <View>
      <Text>
        {displayName}{'\n'}
      </Text>
    </View>
  </TouchableHighlight>;

Category.propTypes = {
  displayName: React.PropTypes.string.isRequired,
};

export default Category;

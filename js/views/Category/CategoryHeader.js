import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from '../../common/styles';

const CategoryHeader = ({ displayName, returnToCategories }) =>
  <View style={[styles.backgroundColorDefault]}>
    <TouchableHighlight onPress={returnToCategories}>
      <Text>
        Return to {displayName}
      </Text>
    </TouchableHighlight>
  </View>;

CategoryHeader.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  returnToCategories: React.PropTypes.func.isRequired,
};

export default CategoryHeader;

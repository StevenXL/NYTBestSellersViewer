import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from '../../common/styles';

const CategoryHeader = ({ displayName }) =>
  <View style={[styles.backgroundColorDefault]}>
    <TouchableHighlight>
      <Text>
        Return to {displayName}
      </Text>
    </TouchableHighlight>
  </View>;

CategoryHeader.propTypes = {
  displayName: React.PropTypes.string.isRequired,
};

export default CategoryHeader;

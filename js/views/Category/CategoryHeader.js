import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from '../../common/styles';

const CategoryHeader = ({ returnToCategories }) =>
  <View
    style={[
      styles.backgroundColorDark,
      styles.flexDirectionRow,
      styles.justifyContentCenter,
      styles.paddingBottomTen,
      styles.paddingTopTen,
      styles.marginBottomFive,
    ]}
  >
    <TouchableHighlight onPress={returnToCategories}>
      <Text style={[styles.fontColorLight]}>
        Return to Categories
      </Text>
    </TouchableHighlight>
  </View>;

CategoryHeader.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  returnToCategories: React.PropTypes.func.isRequired,
};

export default CategoryHeader;

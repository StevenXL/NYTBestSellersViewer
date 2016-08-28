import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';

const DefaultView = ({ children }) => {
  const { backgroundColorDefault, flexOne } = styles;
  const { marginLeftTen, marginTopTwenty } = styles;

  return (
    <View style={[backgroundColorDefault, flexOne]}>
      <View style={[marginLeftTen, marginTopTwenty]}>
        {children}
      </View>
    </View>
  );
};

DefaultView.propTypes = {
  children: React.PropTypes.array.isRequired,
};

export default DefaultView;

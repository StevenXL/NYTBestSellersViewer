import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';

const DefaultView = ({ children }) => {
  const { backgroundColorDefault, marginTopTwenty, flexOne } = styles;

  return (
    <View style={[backgroundColorDefault, marginTopTwenty, flexOne]}>
      {children}
    </View>
  );
};

DefaultView.propTypes = {
  children: React.PropTypes.array.isRequired,
};

export default DefaultView;

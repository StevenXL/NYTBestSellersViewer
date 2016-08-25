import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  touchable: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});

const IntroductoryView = ({ navigator }) =>
  <View style={styles.container}>
    <Text style={styles.text}>
      Welcome to the NYT Best Sellers Viewer!
    </Text>
    <TouchableHighlight onPress={() => navigator.push({ id: 'CategoriesView' })}>
      <Text style={styles.touchable}>
        Tap Here to View a the NYT Best Sellers Categories
      </Text>
    </TouchableHighlight>
  </View>;

IntroductoryView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default IntroductoryView;

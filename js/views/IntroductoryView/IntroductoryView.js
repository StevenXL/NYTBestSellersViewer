import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import requestCategories from '../../actions/requestCategories';

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

const routeToCategoriesView = (store, navigator) => {
  store.dispatch(requestCategories);
  navigator.push({ id: 'CategoriesView' });
};

const IntroductoryView = ({ navigator }, { store }) =>
  <View style={styles.container}>
    <Text style={styles.text}>
      Welcome to the NYT Best Sellers Viewer!
    </Text>
    <TouchableHighlight onPress={() => routeToCategoriesView(store, navigator)}>
      <Text style={styles.touchable}>
        Tap Here to View a the NYT Best Sellers Categories
      </Text>
    </TouchableHighlight>
  </View>;

IntroductoryView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

IntroductoryView.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default IntroductoryView;

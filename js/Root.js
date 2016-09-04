import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers/app';
import NYTBestSellersViewer from './NYTBestSellersViewer';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: createStore(app, applyMiddleware(thunk)),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <NYTBestSellersViewer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => Root);

export default Root;

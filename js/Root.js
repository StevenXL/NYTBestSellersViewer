import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/app';
import NYTBestSellersViewer from './NYTBestSellersViewer';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: createStore(app),
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

export default Root;

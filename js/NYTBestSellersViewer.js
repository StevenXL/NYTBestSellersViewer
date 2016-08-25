import React from 'react';
import { Navigator } from 'react-native';
import renderScene from './common/renderScene';

const NYTBestSellersViewer = () =>
  <Navigator
    initialRoute={{ id: 'IntroductoryView' }}
    renderScene={renderScene}
  />;

NYTBestSellersViewer.contextTypes = {
  store: React.PropTypes.object.isRequired,
};


export default NYTBestSellersViewer;

import React from 'react';
import IntroductoryView from './views/IntroductoryView/IntroductoryView';
import CategoriesView from './views/CategoriesView/CategoriesView';
import RoutingError from './RoutingError';

const renderScene = (route, navigator) => {
  switch (route.id) {
    case 'IntroductoryView':
      return <IntroductoryView {...route.props} navigator={navigator} />;
    case 'CategoriesView':
      return <CategoriesView {...route.props} navigator={navigator} />;
    default:
      throw new RoutingError(`Unknown route.id: ${route.id}`);
  }
};

export default renderScene;
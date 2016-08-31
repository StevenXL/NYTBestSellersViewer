import React from 'react';
import IntroductoryView from '../views/Introductory/IntroductoryView';
import CategoriesView from '../views/Categories/CategoriesView';
import CategoryView from '../views/Category/CategoryView';
import RoutingError from './RoutingError';

const renderScene = (route, navigator) => {
  switch (route.id) {
    case 'IntroductoryView':
      return <IntroductoryView {...route.props} navigator={navigator} />;
    case 'CategoriesView':
      return <CategoriesView {...route.props} navigator={navigator} />;
    case 'CategoryView':
      return <CategoryView {...route.props} navigator={navigator} />;
    default:
      throw new RoutingError(`Unknown route.id: ${route.id}`);
  }
};

export default renderScene;

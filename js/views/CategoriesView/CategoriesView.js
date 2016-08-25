import React, { Component } from 'react';
import CategoryList from './CategoryList';
import requestCategories from '../../actions/requestCategories';

class CategoriesView extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(requestCategories);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { categories } = store.getState();

    return (
      <CategoryList categories={categories} />
    );
  }
}

CategoriesView.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

CategoriesView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default CategoriesView;

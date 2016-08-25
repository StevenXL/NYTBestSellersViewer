import React, { Component } from 'react';
import CategoryList from './CategoryList';

const GET_CATEGORIES = 'GET_CATEGORIES';

class CategoriesView extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch({ type: GET_CATEGORIES });
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

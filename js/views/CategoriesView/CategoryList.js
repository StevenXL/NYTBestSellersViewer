import React, { PropTypes } from 'react';
import humps from 'humps';
import Category from './Category';
import DefaultView from '../../common/DefaultView';

const CategoryList = ({ categories }) => {
  const camelizedCategories = humps.camelizeKeys(categories);
  const categoryElements = camelizedCategories.map(
    (category, idx) => <Category {...category} key={idx} />
  );

  return (
    <DefaultView>
      {categoryElements}
    </DefaultView>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string.isRequired,
      list_name: PropTypes.string.isRequired,
      list_name_encoded: PropTypes.string.isRequired,
    })
  ),
};

export default CategoryList;

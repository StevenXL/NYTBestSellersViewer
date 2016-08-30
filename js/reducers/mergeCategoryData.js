import _ from 'lodash';

const mergeCategoryData = (state = [], action) =>
  state.map((category) => {
    let replaceWith;

    if (category.list_name_encoded === action.category) {
      replaceWith = _.assign({}, category, action.data, { isLoaded: true });
    } else {
      replaceWith = _.assign({}, category);
    }

    return replaceWith;
  });

export default mergeCategoryData;

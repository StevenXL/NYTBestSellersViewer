// reducer has to return a meaningful state
// hence default param

const categories = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORIES_FETCHED':
      return action.categories;
    default:
      return state;
  }
};

export default categories;

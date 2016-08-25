// reducer has to return a meaningful state
// hence default param

const categories = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return (
        [{
          list_name: 'Combined Print and E-Book Fiction',
          display_name: 'Combined Print & E-Book Fiction',
          list_name_encoded: 'combined-print-and-e-book-fiction',
        }]
      );
    default:
      return state;
  }
};

export default categories;

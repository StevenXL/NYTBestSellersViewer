const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';

const categoriesFetched = (categories) => {
  return (
    { type: CATEGORIES_FETCHED, categories }
  );
};

export default categoriesFetched;

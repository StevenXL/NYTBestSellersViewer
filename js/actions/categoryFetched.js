const CATEGORY_FETCHED = 'CATEGORY_FETCHED';

const categoryFetched = (category, data) =>
  ({ type: CATEGORY_FETCHED, category, data });

export default categoryFetched;

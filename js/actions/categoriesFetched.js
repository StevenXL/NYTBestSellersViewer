import { CATEGORIES_FETCHED } from '../common/constants';

const categoriesFetched = (categories) =>
  ({ type: CATEGORIES_FETCHED, categories });

export default categoriesFetched;

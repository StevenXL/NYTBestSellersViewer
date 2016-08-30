import { CATEGORY_FETCHED } from '../common/constants';

const categoryFetched = (category, data) =>
  ({ type: CATEGORY_FETCHED, category, data });

export default categoryFetched;

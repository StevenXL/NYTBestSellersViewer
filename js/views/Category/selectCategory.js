import _ from 'lodash';

const selectCategory = (state) => _.find(state.categories, 'isLoaded') || {};

export default selectCategory;

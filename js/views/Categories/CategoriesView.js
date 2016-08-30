import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import requestCategory from '../../actions/requestCategory';

const mapStateToProps = (state, ownProps) =>
  ({ categories: state.categories, navigator: ownProps.navigator });

const mapDispatchToProps = (dispatch) => ({
  onCategoryClick: (listNameEncoded) => dispatch(requestCategory(listNameEncoded)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

import { connect } from 'react-redux';
import Category from './Category';
import selectCategory from './selectCategory';

const mapStateToProps = (state, ownProps) => ({
  navigator: ownProps.navigator,
  category: selectCategory(state),
});

export default connect(mapStateToProps)(Category);

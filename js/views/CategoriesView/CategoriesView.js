import { connect } from 'react-redux';
import CategoryList from './CategoryList';

const mapStateToProps = (state) => ({ categories: state.categories });

export default connect(mapStateToProps)(CategoryList);

import { combineReducers } from 'redux';
import categories from './categories';


const app = combineReducers({ categories });

export default app;

// const app = combineReducers({ categories });

// const app = (state = {}, action) => {
//  return (
//    {
//      categories: categories(state.categories, action);
//    }
//  );
// };

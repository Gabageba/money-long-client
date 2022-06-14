import {combineReducers, createStore} from 'redux';
import userReducer from './userReducer';
import accountReducer from './accountReducer';
import accountTypeReducer from './accountTypeReducer';
import categoryReducer from './categoryReducer';
import recordReducer from './recordReducer';

let reducers = combineReducers({
  user: userReducer,
  account: accountReducer,
  accountType : accountTypeReducer,
  category: categoryReducer,
  record: recordReducer
})

let store = createStore(reducers)

export default store
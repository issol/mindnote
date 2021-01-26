import { combineReducers } from 'redux';
import userReducer from './users/reducer';
import articleReducer from './articles/reducer';

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

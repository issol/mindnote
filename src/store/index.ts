import { combineReducers } from 'redux';

import userReducer from './users/reducer';
import articleReducer from './articles/reducer';
import articleDetailReducer from './article/reducer';

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  articleDetailReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

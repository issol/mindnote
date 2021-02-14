import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import articleReducer from './articleList/reducer';
import articleDetailReducer from './article/reducer';

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  articleDetailReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

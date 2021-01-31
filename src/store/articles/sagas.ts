import { ArticleInfo } from './types';
import axios from 'axios';

import { HOST } from 'constants/requests';

const CreateArticleApi = (payload: ArticleInfo) =>
  axios.post(HOST + '/articles', payload);

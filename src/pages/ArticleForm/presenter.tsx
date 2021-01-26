import TextInput from 'components/TextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { ArticleState } from 'store/articles/types';

const ArticleFormPresenter = ({
  articleReducer,
  changeTitle,
  changeDescription,
  hadleSaveArticle,
}) => {
  return (
    <>
      <TextInput
        type={'text'}
        label={'Title'}
        value={articleReducer.articleInfo.title}
        onChange={changeTitle}
      />
      <TextInput
        type={'text'}
        label={'Desc'}
        value={articleReducer.articleInfo.description}
        onChange={changeDescription}
      />
      <button className="save-article" onClick={hadleSaveArticle}>
        Save
      </button>
    </>
  );
};

export default ArticleFormPresenter;

import TextInput from 'components/TextInput';
import React from 'react';
import { Form } from 'react-bootstrap';
import { ArticleState } from 'store/articles/types';

const ArticleFormPresenter = ({
  articleReducer,
  ChangeTitle,
  ChangeDescription,
  HadleSaveArticle,
}) => {
  return (
    <>
      <TextInput
        type={'text'}
        label={'Title'}
        value={articleReducer.articleInfo.title}
        onChange={ChangeTitle}
      />
      <TextInput
        type={'text'}
        label={'Desc'}
        value={articleReducer.articleInfo.description}
        onChange={ChangeDescription}
      />
      <button className="save-article" onClick={HadleSaveArticle}>
        Save
      </button>
    </>
  );
};

export default ArticleFormPresenter;

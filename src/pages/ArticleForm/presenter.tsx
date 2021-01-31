import React from 'react';

const ArticleFormPresenter = ({ hadleSaveArticle }) => {
  return (
    <>
      <button className="save-article" onClick={hadleSaveArticle}>
        Save
      </button>
    </>
  );
};

export default ArticleFormPresenter;

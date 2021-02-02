import CreateArticleModal from 'components/CreateArticleModal';
import Navigation from 'components/Navigation';
import React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';
import { ArticleType } from 'store/articles/types';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type inputProps = {
  subject: string;
  description: string;
};

type HomeType = {
  isOpenCreateArticleModal: boolean;
  openModalForCreateArticle: (event: React.MouseEvent<HTMLElement>) => void;
  handleCreateArticle: (event: React.MouseEvent<HTMLElement>) => void;
  articleList: ArticleType[];
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<inputProps, FieldError>;
};

const ArticleListPresenter = ({
  isOpenCreateArticleModal,
  openModalForCreateArticle,
  handleCreateArticle,
  articleList,
  register,
  handleSubmit,
  errors,
}: HomeType) => {
  return (
    <>
      <Navigation />
      <button
        className="move-to-create-article"
        onClick={openModalForCreateArticle}
      >
        Add Article
      </button>
      {isOpenCreateArticleModal && (
        <CreateArticleModal
          register={register}
          handleSubmit={handleSubmit}
          handleCreateArticle={handleCreateArticle}
          errors={errors}
        />
      )}
      {articleList.map((article) => {
        return (
          <div key={article.id}>
            {article.subject} {article.description}
          </div>
        );
      })}
    </>
  );
};

export default ArticleListPresenter;

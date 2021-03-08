import React from 'react';

import styled from 'styled-components';
import trashBasketImage from 'assets/images/trashBasket.png';
import { RouteComponentProps } from 'react-router-dom';

type Props = {
  id: number;
  subject: string;
  description: string;
  handleDeleteArticle: (articleId: number) => (event: React.MouseEvent<HTMLElement>) => void;
  history: RouteComponentProps['history'];
};

const ArticleCard = ({ id, subject, description, handleDeleteArticle, history }: Props) => {
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        history.push(`/article/${id}`);
      }}
    >
      <ArticleForm>
        <ArticleTitle>{subject}</ArticleTitle>
        <SubjectLine />
        <ArticleDescription>{description.slice(0, 100)}</ArticleDescription>
      </ArticleForm>
      <div>
        <RemoveArticleButton onClick={handleDeleteArticle(id)}></RemoveArticleButton>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: white;
  display: flex;
  margin-bottom: 70px;
  margin-right: 50px;
  font-weight: 300;
  width: 280px;

  padding: 20px;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 3px;
  width: 4rem;
  margin-bottom: 4px;
  border-radius: 1px;
`;

const ArticleForm = styled.div`
  width: 95%;
`;

const ArticleTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c2c2c;
`;

const ArticleDescription = styled.h5`
  font-size: 15px;
`;

const RemoveArticleButton = styled.button`
  background-image: url(${trashBasketImage});
  background-color: white;
  width: 17px;
  height: 17px;
  border: none;
`;

export default ArticleCard;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article = ({
  id,
  subject,
  description,
  handleDeleteArticle,
}) => {
  return (
    <Card key={id}>
      <LinkArticle
        to={{
          pathname: `/article/${id}`,
          state: {id},
        }}
      >
        <ArticleTitle>{subject}</ArticleTitle>
      </LinkArticle>
      <p className="description">{description.slice(0, 100)}</p>
      <button onClick={handleDeleteArticle} id={id}>
        삭제
      </button>
    </Card>
  );
};

const LinkArticle = styled(Link)`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background-color: white;
  margin-bottom: 70px;
  margin-right: 50px;
  font-weight: 300;
  width: 300px;
  heihgt: 80%;
  padding: 20px;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const ArticleTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c2c2c;
`;

export default Article;

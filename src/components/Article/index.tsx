import React from 'react';
import styled from 'styled-components';

const Article = ({ key, subject, description }) => {
  return (
    <CardView>
      <CardWrapper>
        <Card key={key}>
          <ArticleTitle>{subject}</ArticleTitle>
          <p className="ddd">{description.slice(0, 100)}</p>
        </Card>
      </CardWrapper>
    </CardView>
  );
};

const CardView = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  float: left;
`;

const CardWrapper = styled.div`
  display: flex;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
`;

const Card = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  width: 350px;
  height: 80%;
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

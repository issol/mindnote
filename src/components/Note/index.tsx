import React from 'react';

import styled from 'styled-components';

const Note = ({
  id,
  contents,
  createdAt,
  
  
}) => {
  return (
        <Card key={id}>
             <ArticleTitle>{contents}</ArticleTitle>
             
        </Card>
  );
};





const Card = styled.div`
  background-color: white;
  margin-bottom: 70px;
  margin-right: 50px;
  font-weight: 300;
  width: 30%;
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
  font-size: 15px;
  color: #2c2c2c;
`;

export default Note;

import React from 'react';
import styled from 'styled-components';

import Moment from 'react-moment';
import MarkdownIt from 'markdown-it';

import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

type Props = {
  subject: string;
  body: string;
  createdAt: string;
};

const PublishedArticleCard = ({ subject, body, createdAt }: Props) => {
  const mdParser = new MarkdownIt();

  const removeHtml = (text: string) => {
    text = text.replace(/<p\/>/gi, '<br>');
    text = text.replace(/(<([^>]+)>)/gi, '');
    return text;
  };

  return (
    <Card>
      <Subject>{subject}</Subject>
      <ArticleBody value={removeHtml(mdParser.render(body))} readOnly></ArticleBody>
      <AricleCreatedAt>
        <Date format="YYYY년 MM월 DD일">{createdAt}</Date>
      </AricleCreatedAt>
      <DevideLine />
    </Card>
  );
};

const Card = styled.div`
  ${({ theme }) => theme.common.flexColumn}
  background-color: white;

  padding: 20px;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Subject = styled.div`
  ${({ theme }) => theme.common.noneLine}
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  color: black;
  flex: 1;
`;

const ArticleBody = styled.textarea`
  ${({ theme }) => theme.common.noneLine}
  font-size: 15px;
  color: #666666;
  cursor: pointer;
  overflow: scroll;
  flex: 8;
  resize: none;
`;

const AricleCreatedAt = styled.div`
  display: flex;
  flex-direction: row-reverse;

  flex: 1;
`;

const Date = styled(Moment)`
  font-size: 13px;
  color: #333333;
`;

const DevideLine = styled.div`
  background: rgb(73, 80, 87);
  height: 1px;

  border-radius: 1px;
`;

export default PublishedArticleCard;

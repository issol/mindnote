import Navigation from 'components/Navigation';
import React from 'react';
import { ArticleDetail } from 'store/article/types';
import styled from 'styled-components';
import Moment from 'react-moment';

import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

type Props = {
  articleDetail: ArticleDetail;
  mdParser: MarkdownIt;
};

const PublishedArticlePresenter = ({ articleDetail, mdParser }: Props) => {
  return (
    <Container>
      <Navigation />
      <ArticleContainer>
        <SubjectForm>
          <Subject>{articleDetail.subject}</Subject>
        </SubjectForm>
        <DateForm>
          <Date format="YYYY년 MM월 DD일">{articleDetail.createdAt}</Date>
        </DateForm>
        <DescriptionForm>
          <Description>{articleDetail.description}</Description>
        </DescriptionForm>
        <ArticleForm>
          <MdEditor
            value={articleDetail.body}
            style={{ border: 0, backgroundColor: '#fafafa' }}
            renderHTML={(text) => mdParser.render(text)}
            view={{ menu: false, md: false, html: true }}
          />
        </ArticleForm>
      </ArticleContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const ArticleContainer = styled.div`
  ${({ theme }) => theme.common.flexColumn}
  margin: 70px auto;
  width: 60%;
`;

const SubjectForm = styled.div``;

const Subject = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

const DateForm = styled.div`
  margin-top: 30px;
  padding-left: 10px;
`;

const Date = styled(Moment)`
  font-size: 15px;
`;

const DescriptionForm = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 35px;
  background: linear-gradient(to left, #ff105f, #ffad06);

  border-radius: 30px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
`;

const ArticleForm = styled.div`
  margin-top: 50px;
`;

export default PublishedArticlePresenter;

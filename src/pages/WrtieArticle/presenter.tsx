import React from 'react';

import styled from 'styled-components';

import MdEditor from 'react-markdown-editor-lite';
import { RouteComponentProps } from 'react-router-dom';

import MarkdownIt from 'markdown-it';

import { ConnectionFormType } from 'modules/NoteGraph/container';
import { ArticleDetailFormType, ArticleInfoType, NoteFormType } from './container';

import 'react-markdown-editor-lite/lib/index.css';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  mdParser: MarkdownIt;
  history: RouteComponentProps['history'];
  articleDetail: ArticleDetailFormType;
  articleInfo: ArticleInfoType;
  handleEditorChange: ({ text: string }) => void;
  handleSubjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateArticleForm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const WriteArticlePresenter = ({
  mdParser,
  history,
  articleDetail,
  articleInfo,
  handleEditorChange,
  handleSubjectChange,
  handleDescriptionChange,
  handleUpdateArticleForm,
}: Props) => {
  return (
    <Container>
      <WriteArticlePage>
        <WrtieArticleForm>
          <ArticleInfoForm>
            <SubjectInput
              type="text"
              name="subject"
              defaultValue={articleDetail.subject}
              onChange={handleSubjectChange}
              placeholder="제목을 입력해주세요."
            />
            <SubjectLine />
            <DescriptionInput
              type="text"
              name="description"
              defaultValue={articleDetail.description}
              onChange={handleDescriptionChange}
              placeholder="(선택)설명을 입력해보세요."
            />
          </ArticleInfoForm>
          <div>
            <MdEditor
              style={{ height: '560px' }}
              value={articleInfo.body}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
            />
          </div>
          <ButtonForm>
            <GoBackButton onClick={() => history.goBack()}>뒤로가기</GoBackButton>

            <PublishArticleButton onClick={handleUpdateArticleForm}>출간하기</PublishArticleButton>
          </ButtonForm>
        </WrtieArticleForm>

        <NoteConnectionInfo>
          {articleDetail.connections.map((conn: ConnectionFormType) => {
            return (
              <ReasonForm key={conn.id}>
                {conn.reason} :
                {articleDetail.notes.map((note: NoteFormType) => {
                  if (note.id === conn.leftNote || note.id === conn.rightNote) {
                    return <NoteForm key={note.id}>{note.contents}</NoteForm>;
                  }
                })}
              </ReasonForm>
            );
          })}
        </NoteConnectionInfo>
      </WriteArticlePage>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const WriteArticlePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const WrtieArticleForm = styled.div`
  width: 50%;
`;

const ArticleInfoForm = styled.div`
  box-sizing: border-box;
  margin: 50px 0 0 50px;
  width: 100%;
  height: 160px;
`;

const NoteConnectionInfo = styled.div`
  background: rgb(240, 240, 240);

  width: 50%;
`;

const SubjectInput = styled.input`
  border: none;
  font-size: 50px;
  outline: none;
  background-color: #fafafa;
`;

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const DescriptionInput = styled.input`
  border: none;
  outline: none;
  background-color: #fafafa;
`;

const ReasonForm = styled.div`
  margin: 30px 0 0 30px;
  display: flex;
`;

const NoteForm = styled.div`
  padding-left: 20px;
`;

const ButtonForm = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 5px 10px 10px 5px;
`;

const GoBackButton = styled.button`
  width: 150px;
  outline: none;
  border-radius: 30px;
  margin-right: 10px;
  background: linear-gradient(to right, #dcdcdc, #e6e6e6);
  border: none;
`;

const PublishArticleButton = styled.button`
  width: 150px;
  height: 40px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: none;
  outline: none;
  border-radius: 30px;
`;

export default WriteArticlePresenter;

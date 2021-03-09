import React from 'react';

import styled from 'styled-components';

import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { ConnectionFormType } from 'modules/NoteGraph/container';
import { ArticleDetailFormType, ArticleInfoType, NoteFormType } from './container';
import MarkdownIt from 'markdown-it';
import { RouteComponentProps } from 'react-router-dom';

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
  );
};

const WriteArticlePage = styled.div`
  display: flex;
`;

const WrtieArticleForm = styled.div`
  width: 65%;
`;

const ArticleInfoForm = styled.div`
  box-sizing: border-box;
  margin: 50px 0 0 50px;
  width: 100%;
  height: 160px;
`;

const NoteConnectionInfo = styled.div`
  background: rgb(204, 204, 204);

  width: 35%;
`;

const SubjectInput = styled.input`
  border: none;
  font-size: 50px;
  outline: none;
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
  justify-content: space-between;

  margin: 5px 10px 10px 0;
`;

const GoBackButton = styled.button`
  width: 20%;
  outline: none;

  background-color: white;
  border: none;
  padding: 10px 30px;
`;

const PublishArticleButton = styled.button`
  width: 20%;
  padding: 10px 30px;

  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

export default WriteArticlePresenter;

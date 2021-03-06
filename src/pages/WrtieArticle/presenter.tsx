import React from 'react';

import styled from 'styled-components';

import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  mdParser: any;
  articleDetailReducer: any;
  handleEditorChange: any;
  handleSubjectChange: any;
  handleDescriptionChange: any;
};

const WriteArticlePresenter = ({
  mdParser,
  articleDetailReducer,
  handleEditorChange,
  handleSubjectChange,
  handleDescriptionChange,
}: Props) => {
  return (
    <WriteArticlePage>
      <WrtieArticleForm>
        <ArticleInfoForm>
          <SubjectInput
            type="text"
            name="subject"
            value={articleDetailReducer.subject}
            onChange={handleSubjectChange}
            placeholder="제목을 입력해주세요."
          />
          <SubjectLine />
          <DescriptionInput
            type="text"
            name="description"
            value={articleDetailReducer.description}
            onChange={handleDescriptionChange}
            placeholder="(선택)설명을 입력해보세요."
          />
        </ArticleInfoForm>

        <MdEditor style={{ height: '560px' }} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
      </WrtieArticleForm>

      <NoteConnectionInfo></NoteConnectionInfo>
    </WriteArticlePage>
  );
};

const WriteArticlePage = styled.div`
  display: flex;
`;

const WrtieArticleForm = styled.div`
  width: 60%;
`;

const ArticleInfoForm = styled.div`
  box-sizing: border-box;
  margin: 50px 0 0 50px;
  width: 100%;
  height: 150px;
`;

const NoteConnectionInfo = styled.div`
  background: rgb(204, 204, 204);
  width: 40%;
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

export default WriteArticlePresenter;

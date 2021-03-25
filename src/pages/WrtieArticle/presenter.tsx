import React from 'react';

import styled from 'styled-components';

import MdEditor from 'react-markdown-editor-lite';
import { RouteComponentProps } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import MarkdownIt from 'markdown-it';

import { ArticleDetailFormType, ArticleInfoType, ConnectionFormActiveType, NoteFormType } from './container';

import 'react-markdown-editor-lite/lib/index.css';

import dropDownImage from 'assets/images/dropdown.svg';
import { NavProps } from 'components/Navigation/presenter';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  mdParser: MarkdownIt;
  history: RouteComponentProps['history'];
  articleDetail: ArticleDetailFormType;
  articleInfo: ArticleInfoType;
  handleEditorChange: ({ text: string }) => void;
  handleSubjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateArticleForm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  dropNoteRef: React.MutableRefObject<null>;
  handleListDropDown: (idx: number) => void;
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
  dropNoteRef,
  handleListDropDown,
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
              value={articleInfo.body}
              style={{ height: '62vh' }}
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
          {articleDetail.connections.map((conn: ConnectionFormActiveType, index) => {
            return (
              <ReasonCardWrapper key={conn.id} ref={dropNoteRef} isActive={conn.isActive}>
                <ReasonCard>
                  <Reason readOnly maxRows={conn.isActive ? 3 : 1} value={conn.reason} />

                  <DropDownButton onClick={() => handleListDropDown(index)} />
                </ReasonCard>

                {conn.isActive &&
                  articleDetail.notes.map((note: NoteFormType) => {
                    if (note.id === conn.leftNote || note.id === conn.rightNote) {
                      return (
                        <NoteCard isActive={conn.isActive} key={note.id}>
                          <Note readOnly maxRows={3} value={note.contents} />
                        </NoteCard>
                      );
                    }
                    return <></>;
                  })}
              </ReasonCardWrapper>
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
  ${({ theme }) => theme.common.flexColumn}
  width: 60%;
`;

const ArticleInfoForm = styled.div`
  box-sizing: border-box;
  margin: 50px 50px 10px 50px;
  height: 21.5vh;
  max-width: 100%;
`;

const NoteConnectionInfo = styled.div`
  background: rgb(240, 240, 240);
  width: 40%;
  height: 100vh;
  overflow: scroll;
`;

const SubjectInput = styled.input`
  ${({ theme }) => theme.common.noneLine};
  background-color: #fafafa;
  font-size: ${({ theme }) => theme.fontSize.title};
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
  ${({ theme }) => theme.common.noneLine};
  background-color: #fafafa;
  font-size: ${({ theme }) => theme.fontSize.subTitle};
`;

const ReasonCardWrapper = styled.div<NavProps>`
  background-color: white;
  margin: 20px 0 0 20px;
  width: 95%;
  padding: 20px;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const ReasonCard = styled.div`
  ${({ theme }) => theme.common.flexRow}

  justify-content: space-between;
  border-bottom: 2px solid;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const Reason = styled(TextareaAutosize)`
  ${({ theme }) => theme.common.noneLine}

  color: black;
  width: 95%;
  resize: none;
  font-size: ${({ theme }) => theme.fontSize.subTitle};
`;

const NoteCard = styled.div<NavProps>`
  ${({ theme }) => theme.common.flexColumn}

  opacity: ${(props) => (props.isActive ? '1;' : '0;')};
  transform: ${(props) => (props.isActive ? 'translateY(0);' : 'translateY(-20px);')};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

const Note = styled(TextareaAutosize)`
  ${({ theme }) => theme.common.noneLine}
  margin-bottom: 10px;
  padding: 10px 0 10px 10px;
  background: linear-gradient(to right, #f5f5f5, #f0f0f0);
  resize: none;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  color: ${({ theme }) => theme.colors.gray};
`;

const DropDownButton = styled.div`
  background-image: url(${dropDownImage});
  width: 15px;
  height: 15px;
`;

const ButtonForm = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 6vh;
  margin: 10px;
`;

const GoBackButton = styled.button`
  ${({ theme }) => theme.common.noneLine};
  width: 150px;

  border-radius: 30px;
  background: linear-gradient(to right, #dcdcdc, #e6e6e6);

  margin-right: 10px;
`;

const PublishArticleButton = styled.button`
  ${({ theme }) => theme.common.noneLine};
  width: 150px;
  border-radius: 30px;
  background: linear-gradient(to right, #ff105f, #ffad06);
`;

export default WriteArticlePresenter;

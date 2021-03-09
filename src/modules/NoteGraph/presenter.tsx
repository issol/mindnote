import React from 'react';

import Graph from 'react-graph-vis';

import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';
import CreateNoteModal from 'modules/Note/CreateNoteModal';
import UpdateNoteModal from 'modules/Note/UpdateNoteModal';
import { ConnectionFormType, EventType, GraphType, ManiPulationType, NoteFormType } from './container';

import styled from 'styled-components';
import { graphDefaultVisualOptions } from 'assets/styles/graphstyle';
import './styles.css';

import { Menu, Item, useContextMenu } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'menu_id';

type Props = {
  noteProps: {
    handleCreateNote: () => void;
    handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
    handleDeleteNote: (id: number) => void;
    getSelectedNoteInfo: () => void;
    changeNoteFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isOpenCreateNoteModal: boolean;
    isOpenUpdateNoteModal: boolean;
    setIsOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenUpdateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
    noteFormData: NoteFormType;
    selectedNoteId: number;
  };
  connectionProps: {
    handleCreateConnection: () => void;
    handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
    changeConnectionFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isOpenCreateConnectionModal: boolean;
    isOpenUpdateConnectionModal: boolean;
    setIsOpenCreateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenUpdateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
    connectionFormData: ConnectionFormType;
  };
  visProps: {
    events: EventType;
    graph: GraphType;
    manipulation: ManiPulationType;
  };
};

const NoteGraphPresenter = ({ noteProps, connectionProps, visProps }: Props) => {
  const { show } = useContextMenu({ id: MENU_ID });

  return (
    <>
      <NoteGraphWrapper onContextMenu={show}>
        <Graph
          graph={visProps.graph}
          options={{ ...graphDefaultVisualOptions, manipulation: visProps.manipulation }}
          events={visProps.events}
        />

        <CreateNoteModal
          isOpenCreateNoteModal={noteProps.isOpenCreateNoteModal}
          setIsOpenCreateNoteModal={noteProps.setIsOpenCreateNoteModal}
          handleCreateNote={noteProps.handleCreateNote}
          changeNoteFormData={noteProps.changeNoteFormData}
        />
        <UpdateNoteModal
          isOpenUpdateNoteModal={noteProps.isOpenUpdateNoteModal}
          setIsOpenUpdateNoteModal={noteProps.setIsOpenUpdateNoteModal}
          handleUpdateNote={noteProps.handleUpdateNote}
          data={noteProps.noteFormData}
          changeNoteFormData={noteProps.changeNoteFormData}
        />

        <CreateConnectionModal
          isOpenCreateConnectionModal={connectionProps.isOpenCreateConnectionModal}
          setIsOpenCreateConnectionModal={connectionProps.setIsOpenCreateConnectionModal}
          handleCreateConnection={connectionProps.handleCreateConnection}
          changeConnectionFormData={connectionProps.changeConnectionFormData}
        />

        <UpdateConnectionModal
          isOpenUpdateConnectionModal={connectionProps.isOpenUpdateConnectionModal}
          setIsOpenUpdateConnectionModal={connectionProps.setIsOpenUpdateConnectionModal}
          handleUpdateConnection={connectionProps.handleUpdateConnection}
          data={connectionProps.connectionFormData}
          changeConnectionFormData={connectionProps.changeConnectionFormData}
        />
      </NoteGraphWrapper>
      <Menu id={MENU_ID}>
        <Item id="1" onClick={() => noteProps.setIsOpenCreateNoteModal(true)}>
          노트추가
        </Item>

        {noteProps.selectedNoteId >= 0 ? (
          <>
            <Item onClick={noteProps.getSelectedNoteInfo}>노트수정</Item>
            <Item onClick={() => noteProps.handleDeleteNote(noteProps.selectedNoteId)}>노트삭제</Item>
          </>
        ) : (
          <></>
        )}

        <Item disabled>Disabled</Item>
      </Menu>
    </>
  );
};

const NoteGraphWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export default NoteGraphPresenter;

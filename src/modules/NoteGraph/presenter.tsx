import React from 'react';

import Graph from 'react-graph-vis';

import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';
import CreateNoteModal from 'modules/Note/CreateNoteModal';
import UpdateNoteModal from 'modules/Note/UpdateNoteModal';
import { ConnectionFormType, EventType, GraphType, ManiPulationType, MENU_ID, NoteFormType } from './container';

import styled from 'styled-components';
import { graphDefaultVisualOptions } from 'assets/styles/graphstyle';
import './styles.css';

import { Menu, Item, ContextMenuParams, TriggerEvent } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

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
    isExistSelectedNote: boolean;
    setSelectedNoteId: React.Dispatch<React.SetStateAction<number>>;
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
  show: (event: TriggerEvent, params?: Pick<ContextMenuParams, 'id' | 'props' | 'position'> | undefined) => void;
};

const NoteGraphPresenter = ({ noteProps, connectionProps, visProps, show }: Props) => {
  return (
    <>
      <NoteGraphContainer onContextMenu={show}>
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
      </NoteGraphContainer>
      <Menu id={MENU_ID}>
        <Item id="1" onClick={() => noteProps.setIsOpenCreateNoteModal(true)}>
          노트추가
        </Item>

        {noteProps.isExistSelectedNote ? (
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

const NoteGraphContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: 20px;
`;

export default NoteGraphPresenter;

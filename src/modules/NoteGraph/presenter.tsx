import React from 'react';

import Graph from 'react-graph-vis';

import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';
import CreateNoteModal from 'modules/Note/CreateNoteModal';
import UpdateNoteModal from 'modules/Note/UpdateNoteModal';
import { ConnectionFormType, ConnectionReason, EventType, GraphType, ManiPulationType, NoteFormType } from './container';

import styled from 'styled-components';
import { graphDefaultVisualOptions } from 'assets/styles/graphstyle';
import './styles.css';

import { Menu, Item, useContextMenu } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'menu_id';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  noteProps: {
    noteFormRegister: ({ required }: { required?: boolean }) => RefReturn;
    noteHandleSubmit: Function;
    handleCreateNote: (data: NoteFormType) => void;
    handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
    handleDeleteNote: (id: number) => void;
    getSelectedNoteInfo: () => void;
    changeNoteFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isOpenCreateNoteModal: boolean;
    isOpenUpdateNoteModal: boolean;
    setIsOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenUpdateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
    noteFormData: NoteFormType;
    selectedNoteId: number;
  };
  connectionProps: {
    connectionFormRegister: ({ required }: { required?: boolean }) => RefReturn;
    connectionHandleSubmit: Function;
    handleCreateConnection: (data: ConnectionFormType) => void;
    handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
    changeConnectionFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isOpenCreateConnectionModal: boolean;
    isOpenUpdateConnectionModal: boolean;
    setIsOpenCreateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenUpdateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
    connectionFormData: ConnectionReason;
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
          register={noteProps.noteFormRegister}
          handleSubmit={noteProps.noteHandleSubmit}
          handleCreateNote={noteProps.handleCreateNote}
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
          register={connectionProps.connectionFormRegister}
          handleSubmit={connectionProps.connectionHandleSubmit}
          handleCreateConnection={connectionProps.handleCreateConnection}
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
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
`;

export default NoteGraphPresenter;

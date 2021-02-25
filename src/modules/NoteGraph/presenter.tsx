import { graphDefaultVisualOptions } from 'assets/styles/graphstyle';

import Graph from 'react-graph-vis';
import '/Users/issol/mindnote/node_modules/vis-network/styles/vis-network.css';

import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';
import CreateNoteModal from 'modules/Note/CreateNoteModal';
import UpdateNoteModal from 'modules/Note/UpdateNoteModal';
import React from 'react';
import { ConnectionFormType, ConnectionReason, NoteFormType } from './container';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  noteProps: {
    noteFormRegister: ({ required }: { required?: boolean }) => RefReturn;
    noteHandleSubmit: Function;
    handleCreateNote: (data: NoteFormType) => void;
    handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
    changeNoteFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isOpenCreateNoteModal: boolean;
    isOpenUpdateNoteModal: boolean;
    noteFormData: NoteFormType;
  };
  connectionProps: {
    connectionFormRegister: ({ required }: { required?: boolean }) => RefReturn;
    connectionHandleSubmit: Function;
    handleCreateConnection: (data: ConnectionFormType) => void;
    handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
    changeConnectionFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isOpenCreateConnectionModal: boolean;
    isOpenUpdateConnectionModal: boolean;
    connectionFormData: ConnectionReason;
  };
  visProps: {
    events: any;
    graph: any;
    manipulation: any;
  };
};

const NoteGraphPresenter = ({ noteProps, connectionProps, visProps }: Props) => {
  return (
    <>
      <Graph
        graph={visProps.graph}
        options={{ ...graphDefaultVisualOptions, manipulation: visProps.manipulation }}
        events={visProps.events}
      />
      <CreateNoteModal
        isOpenCreateNoteModal={noteProps.isOpenCreateNoteModal}
        register={noteProps.noteFormRegister}
        handleSubmit={noteProps.noteHandleSubmit}
        handleCreateNote={noteProps.handleCreateNote}
      />
      <UpdateNoteModal
        isOpenUpdateNoteModal={noteProps.isOpenUpdateNoteModal}
        handleUpdateNote={noteProps.handleUpdateNote}
        data={noteProps.noteFormData}
        changeNoteFormData={noteProps.changeNoteFormData}
      />

      <CreateConnectionModal
        isOpenCreateConnectionModal={connectionProps.isOpenCreateConnectionModal}
        register={connectionProps.connectionFormRegister}
        handleSubmit={connectionProps.connectionHandleSubmit}
        handleCreateConnection={connectionProps.handleCreateConnection}
      />

      <UpdateConnectionModal
        isOpenUpdateConnectionModal={connectionProps.isOpenUpdateConnectionModal}
        handleUpdateConnection={connectionProps.handleUpdateConnection}
        data={connectionProps.connectionFormData}
        changeConnectionFormData={connectionProps.changeConnectionFormData}
      />
    </>
  );
};

export default NoteGraphPresenter;

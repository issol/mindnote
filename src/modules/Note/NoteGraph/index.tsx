import React, { useState } from 'react';
import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import Graph from 'react-graph-vis';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import CreateNoteModal from '../CreateNoteModal';
import '/Users/issol/mindnote/node_modules/vis-network/styles/vis-network.css';
import { createNote, deleteNote, deleteConnection, createConnection } from 'store/article/actions';

type EdgeDataType = {
  from: number;
  to: number;
};

const graphDefaultVisualOptions = {
  autoResize: true,
  height: '600px',
  layout: {
    randomSeed: 2,
    improvedLayout: true,
  },
  interaction: {
    zoomView: false,
  },
  edges: {
    width: 1,
    color: {
      color: '#D3D3D3',
      highlight: '#797979',
      hover: '#797979',
      opacity: 1.0,
    },
  },
  nodes: {
    fixed: {
      x: false,
      y: false,
    },
    widthConstraint: {
      minimum: 1,
      maximum: 200,
    },
    shape: 'box',
    size: 10,
    borderWidth: 1.5,
    borderWidthSelected: 2,
    font: {
      color: '#adaeb9',
      size: 15,
      align: 'center',
      bold: {
        color: '#bbbdc0',
        size: 15,
        vadjust: 0,
        mod: 'bold',
      },
    },
    color: {
      background: 'white',
      border: 'black',
    },
  },
};

export type ConnectionFormType = {
  leftNote: number;
  rightNote: number;
  reason: string;
};

type Props = {
  articleId: number;
};

const NoteGraph = ({ articleId }: Props) => {
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const dispatch = useDispatch();

  const { register: connectionFormRegister, handleSubmit: connectionHandleSubmit } = useForm<ConnectionFormType>();

  const [isOpenCreateNoteModal, setIsOpenCreateNoteModal] = useState(false);
  const [isOpenCreateConnectionModal, setIsOpenCreateConnectionModal] = useState(false);

  const [connectionInfo, setConnectionInfo] = useState({ leftNote: 0, rightNote: 0 });

  // const handleCreateNote = (data: NoteFormType) => {
  //   setIsOpenCreateNoteModal(false);

  //   dispatch(createNote.request({ article: articleId, contents: data.contents }));
  // };

  const handleCreateConnection = (data: ConnectionFormType) => {
    setIsOpenCreateConnectionModal(false);

    dispatch(
      createConnection.request({
        article: articleId,
        leftNote: connectionInfo.leftNote,
        rightNote: connectionInfo.rightNote,
        reason: data.reason,
      })
    );
  };

  const events = {
    selectNode: (event: any) => {},
  };

  const manipulation = {
    enabled: true,
    addNode: (_nodeData, _callback) => setIsOpenCreateNoteModal(true),
    editNode: (nodeData, _callback) => {
      // noteUpdate({ id: nodeData.id, contents: nodeData.label });
    },
    deleteNode: (nodeData, _callback) => {
      dispatch(deleteNote.request({ id: nodeData.nodes[0] }));
    },

    addEdge: (edgeData: EdgeDataType, _callback) => {
      setConnectionInfo({ leftNote: edgeData.from, rightNote: edgeData.to });
      setIsOpenCreateConnectionModal(true);
    },
    editEdge: (edgeData, _callback) => {},
    deleteEdge: (edgeData, _callback) => {
      dispatch(deleteConnection.request({ id: edgeData.edges[0] }));
    },
  };

  const graph = {
    nodes: articleDetailReducer.noteList.map((note) => ({ id: note.id, label: note.contents })),
    edges: articleDetailReducer.connectionList.map((connection) => ({
      id: connection.id,
      from: connection.leftNote,
      to: connection.rightNote,
      label: connection.reason,
    })),
  };

  return (
    <>
      <Graph graph={graph} options={{ ...graphDefaultVisualOptions, manipulation }} events={events} />
      {/* <CreateNoteModal
        isOpenCreateNoteModal={isOpenCreateNoteModal}
        register={noteFormRegister}
        handleSubmit={noteHandleSubmit}
        handleCreateNote={handleCreateNote}
      /> */}

      <CreateConnectionModal
        isOpenCreateConnectionModal={isOpenCreateConnectionModal}
        register={connectionFormRegister}
        handleSubmit={connectionHandleSubmit}
        handleCreateConnection={handleCreateConnection}
      />
    </>
  );
};

export default NoteGraph;

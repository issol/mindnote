import React, { useState } from 'react';
import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import Graph from 'react-graph-vis';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import CreateNoteModal from '../Note/CreateNoteModal';
import '/Users/issol/mindnote/node_modules/vis-network/styles/vis-network.css';
import { createNote, deleteNote, deleteConnection, createConnection, updateNote, updateConnection } from 'store/article/actions';
import UpdateNoteModal from '../Note/UpdateNoteModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';
import { graphDefaultVisualOptions } from 'assets/styles/graphstyle';

type EdgeDataType = {
  id: number;
  from: number;
  to: number;
  label: string;
};

export type NoteFormType = {
  contents: string;
};

export type ConnectionFormType = {
  id: number;
  leftNote: number;
  rightNote: number;
  reason: string;
};

export type ConnectionReason = {
  reason: string;
};

type Props = {
  articleId: number;
};

const NoteGraph = ({ articleId }: Props) => {
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const dispatch = useDispatch();

  const [noteFormData, setNoteFormData] = useState({ contents: '' });
  const [selectedNoteId, setSelectedNoteId] = useState(-1);
  const [connectionFormData, setConnectionFormData] = useState<ConnectionFormType>({
    id: -1,
    leftNote: -1,
    rightNote: -1,
    reason: '',
  });

  const { register: noteFormRegister, handleSubmit: noteHandleSubmit } = useForm<NoteFormType>();
  const { register: connectionFormRegister, handleSubmit: connectionHandleSubmit } = useForm<ConnectionFormType>();

  const [isOpenCreateNoteModal, setIsOpenCreateNoteModal] = useState(false);
  const [isOpenUpdateNoteModal, setIsOpenUpdateNoteModal] = useState(false);
  const [isOpenCreateConnectionModal, setIsOpenCreateConnectionModal] = useState(false);
  const [isOpenUpdateConnectionModal, setIsOpenUpdateConnectionModal] = useState(false);

  const [connectionInfo, setConnectionInfo] = useState({ leftNote: 0, rightNote: 0 });

  const handleCreateNote = (data: NoteFormType) => {
    setIsOpenCreateNoteModal(false);

    dispatch(createNote.request({ article: articleId, contents: data.contents }));
  };

  const handleUpdateNote = () => {
    dispatch(updateNote.request({ article: articleId, id: selectedNoteId, ...noteFormData }));
    setIsOpenUpdateNoteModal(false);
  };

  const changeNoteFormData = (event: any) => {
    setNoteFormData((originValue) => ({ ...originValue, contents: event.target.value }));
  };

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

  const handleUpdateConnection = () => {
    dispatch(updateConnection.request({ article: articleId, ...connectionFormData }));
    setIsOpenUpdateConnectionModal(false);
  };
  const changeConnectionFormData = (event: any) => {
    setConnectionFormData((originData) => ({ ...originData, reason: event.target.value }));
  };

  const events = {
    doubleClick: (event: any) => {
      const { nodes, edges } = event;

      if (nodes.length !== 0) {
        const selectedNoteId = nodes[0];
        const foundNote = articleDetailReducer.articleDetail.notes.find((note) => note.id === selectedNoteId);

        setNoteFormData((originData) => ({ ...originData, contents: foundNote?.contents || '' }));
        setSelectedNoteId(selectedNoteId);
        setIsOpenUpdateNoteModal(true);
      } else if (edges.length !== 0) {
        const selectedConnectionId = edges[0];
        const foundConnection = articleDetailReducer.articleDetail.connections.find(
          (connection) => connection.id === selectedConnectionId
        );
        setConnectionFormData(() => ({
          id: selectedConnectionId,
          leftNote: foundConnection?.leftNote || -1,
          rightNote: foundConnection?.rightNote || -1,
          reason: foundConnection?.reason || '',
        }));

        setIsOpenUpdateConnectionModal(true);
      }
    },
  };

  const manipulation = {
    enabled: true,
    addNode: (_nodeData, _callback) => setIsOpenCreateNoteModal(true),

    deleteNode: (nodeData, _callback) => {
      dispatch(deleteNote.request({ id: nodeData.nodes[0] }));
    },

    addEdge: (edgeData: EdgeDataType, _callback) => {
      setConnectionInfo({ leftNote: edgeData.from, rightNote: edgeData.to });
      setIsOpenCreateConnectionModal(true);
    },
    editEdge: (edgeData: EdgeDataType, _callback) => {
      const foundConnection = articleDetailReducer.articleDetail.connections.find((note) => note.id === edgeData.id);

      setConnectionFormData(() => ({
        id: edgeData.id,
        leftNote: edgeData.from,
        rightNote: edgeData.to,
        reason: foundConnection?.reason || '',
      }));

      setIsOpenUpdateConnectionModal(true);
    },
    deleteEdge: (edgeData, _callback) => {
      dispatch(deleteConnection.request({ id: edgeData.edges[0] }));
    },
  };

  const graph = {
    nodes: articleDetailReducer.articleDetail.notes.map((note) => ({ id: note.id, label: note.contents })),
    edges: articleDetailReducer.articleDetail.connections.map((connection) => ({
      id: connection.id,
      from: connection.leftNote,
      to: connection.rightNote,
      label: connection.reason,
    })),
  };

  return (
    <>
      <Graph graph={graph} options={{ ...graphDefaultVisualOptions, manipulation }} events={events} />
      <CreateNoteModal
        isOpenCreateNoteModal={isOpenCreateNoteModal}
        register={noteFormRegister}
        handleSubmit={noteHandleSubmit}
        handleCreateNote={handleCreateNote}
      />

      <CreateConnectionModal
        isOpenCreateConnectionModal={isOpenCreateConnectionModal}
        register={connectionFormRegister}
        handleSubmit={connectionHandleSubmit}
        handleCreateConnection={handleCreateConnection}
      />
      <UpdateNoteModal
        isOpenUpdateNoteModal={isOpenUpdateNoteModal}
        handleUpdateNote={handleUpdateNote}
        data={noteFormData}
        changeNoteFormData={changeNoteFormData}
      />

      <UpdateConnectionModal
        isOpenUpdateConnectionModal={isOpenUpdateConnectionModal}
        handleUpdateConnection={handleUpdateConnection}
        data={connectionFormData}
        changeConnectionFormData={changeConnectionFormData}
      />
    </>
  );
};

export default NoteGraph;

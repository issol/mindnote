import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { createNote, updateNote, updateConnection, deleteNote, createConnection, deleteConnection } from 'store/article/actions';
import NoteGraphPresenter from './presenter';

type VisSelectAdd = {
  id: string;
  x: number;
  y: number;
  label: string;
};

type VisSelectDelete = {
  nodes: [number];
  edges: [number];
};

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

const NoteGraphContainer = ({ articleId }: Props) => {
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const dispatch = useDispatch();

  const [noteFormData, setNoteFormData] = useState({ contents: '' });
  const [selectedNoteId, setSelectedNoteId] = useState(-1);
  const [connectionInfo, setConnectionInfo] = useState({ leftNote: 0, rightNote: 0 });
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

  const handleCreateNote = (data: NoteFormType) => {
    dispatch(createNote.request({ article: articleId, contents: data.contents }));
    setIsOpenCreateNoteModal(false);
  };

  const handleUpdateNote = () => {
    dispatch(updateNote.request({ article: articleId, id: selectedNoteId, ...noteFormData }));
    setIsOpenUpdateNoteModal(false);
  };

  const changeNoteFormData = (event: any) => {
    setNoteFormData((originValue) => ({ ...originValue, contents: event.target.value }));
  };

  const handleCreateConnection = (data: ConnectionFormType) => {
    dispatch(
      createConnection.request({
        article: articleId,
        leftNote: connectionInfo.leftNote,
        rightNote: connectionInfo.rightNote,
        reason: data.reason,
      })
    );
    setIsOpenCreateConnectionModal(false);
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
    initiallyActive: true,
    addNode: (_nodeData: VisSelectAdd, _callback: any) => setIsOpenCreateNoteModal(true),

    deleteNode: (nodeData: VisSelectDelete, _callback: any) => dispatch(deleteNote.request({ id: nodeData.nodes[0] })),

    addEdge: (edgeData: EdgeDataType, _callback: any) => {
      setConnectionInfo({ leftNote: edgeData.from, rightNote: edgeData.to });
      setIsOpenCreateConnectionModal(true);
    },
    editEdge: (edgeData: EdgeDataType, _callback: any) => {
      const foundConnection = articleDetailReducer.articleDetail.connections.find((note) => note.id === edgeData.id);

      setConnectionFormData(() => ({
        id: edgeData.id,
        leftNote: edgeData.from,
        rightNote: edgeData.to,
        reason: foundConnection?.reason || '',
      }));

      setIsOpenUpdateConnectionModal(true);
    },
    deleteEdge: (edgeData: VisSelectDelete, _callback: any) => dispatch(deleteConnection.request({ id: edgeData.edges[0] })),
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
    <NoteGraphPresenter
      noteProps={{
        noteFormRegister,
        noteHandleSubmit,
        handleCreateNote,
        handleUpdateNote,
        changeNoteFormData,
        isOpenCreateNoteModal,
        isOpenUpdateNoteModal,
        noteFormData,
      }}
      connectionProps={{
        connectionFormRegister,
        connectionHandleSubmit,
        handleCreateConnection,
        handleUpdateConnection,
        changeConnectionFormData,
        isOpenCreateConnectionModal,
        isOpenUpdateConnectionModal,
        connectionFormData,
      }}
      visProps={{ events, graph, manipulation }}
    />
  );
};

export default NoteGraphContainer;

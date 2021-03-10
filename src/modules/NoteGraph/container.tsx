import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { createNote, updateNote, updateConnection, deleteNote, createConnection, deleteConnection } from 'store/article/actions';
import NoteGraphPresenter from './presenter';

import Swal from 'sweetalert2';

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
  createdAt: string;
};

export type ConnectionFormType = {
  id: number;
  leftNote: number;
  rightNote: number;
  reason: string;
  createdAt: string;
};

export type GraphType = {
  nodes: { id: number; label: string }[];
  edges: { id: number; from: number; to: number }[];
};

export type ManiPulationType = {
  enabled: boolean;
  initiallyActive: boolean;

  addEdge: (edgeData: EdgeDataType, _callback: any) => void;
  editEdge: (edgeData: EdgeDataType, _callback: any) => void;
  deleteEdge: (edgeData: VisSelectDelete, _callback: any) => void;
};

export type EventType = {
  doubleClick: (event: any) => void;
  click: (event: any) => void;
};

type Props = {
  articleId: number;
};

const NoteGraphContainer = ({ articleId }: Props) => {
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const dispatch = useDispatch();

  const [noteFormData, setNoteFormData] = useState<NoteFormType>({ contents: '', createdAt: '' });
  const [selectedNoteId, setSelectedNoteId] = useState(-1);
  const [connectionInfo, setConnectionInfo] = useState({ leftNote: 0, rightNote: 0 });
  const [connectionFormData, setConnectionFormData] = useState<ConnectionFormType>({
    id: -1,
    leftNote: -1,
    rightNote: -1,
    reason: '',
    createdAt: '',
  });

  const [isOpenCreateNoteModal, setIsOpenCreateNoteModal] = useState(false);
  const [isOpenUpdateNoteModal, setIsOpenUpdateNoteModal] = useState(false);
  const [isOpenCreateConnectionModal, setIsOpenCreateConnectionModal] = useState(false);
  const [isOpenUpdateConnectionModal, setIsOpenUpdateConnectionModal] = useState(false);

  const handleCreateNote = () => {
    dispatch(createNote.request({ article: articleId, contents: noteFormData.contents }));
    setIsOpenCreateNoteModal(false);
  };

  const handleUpdateNote = () => {
    dispatch(updateNote.request({ article: articleId, id: selectedNoteId, ...noteFormData }));
    setIsOpenUpdateNoteModal(false);
  };

  const getSelectedNoteInfo = () => {
    const foundNote = articleDetailReducer.articleDetail.notes.find((note) => note.id === selectedNoteId);

    setNoteFormData((originData) => ({
      ...originData,
      contents: foundNote?.contents || '',
      createdAt: foundNote?.createdAt || '',
    }));

    setIsOpenUpdateNoteModal(true);
  };

  const handleDeleteNote = (id: number) => {
    Swal.fire({
      title: '노트를 삭제하시겠습니까?',
      icon: 'warning',
      cancelButtonText: '취소',
      confirmButtonText: '확인',
      cancelButtonColor: '#dcdcdc',
      confirmButtonColor: '#ff105f',
      showCancelButton: true,
      width: '30%',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNote.request({ id: id }));
        Swal.fire('삭제되었습니다', '', 'success');
      }
    });
  };

  const changeNoteFormData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteFormData((originValue) => ({ ...originValue, contents: event.target.value }));
  };

  const handleCreateConnection = () => {
    dispatch(
      createConnection.request({
        article: articleId,
        leftNote: connectionInfo.leftNote,
        rightNote: connectionInfo.rightNote,
        reason: connectionFormData.reason,
      })
    );
    setIsOpenCreateConnectionModal(false);
  };

  const handleUpdateConnection = () => {
    dispatch(updateConnection.request({ article: articleId, ...connectionFormData }));
    setIsOpenUpdateConnectionModal(false);
  };
  const changeConnectionFormData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConnectionFormData((originData) => ({ ...originData, reason: event.target.value }));
  };

  useEffect(() => {
    if (isOpenCreateNoteModal || isOpenUpdateNoteModal || isOpenCreateConnectionModal || isOpenUpdateConnectionModal) {
      window.history.pushState(null, '', window.location.href);
    }
  }, [isOpenCreateNoteModal, isOpenUpdateNoteModal, isOpenCreateConnectionModal, isOpenUpdateConnectionModal]);

  window.onpopstate = () => {
    setIsOpenCreateNoteModal(false);
    setIsOpenUpdateNoteModal(false);
    setIsOpenCreateConnectionModal(false);
    setIsOpenUpdateConnectionModal(false);
  };

  const events = {
    doubleClick: (event: any) => {
      const { nodes, edges } = event;

      if (nodes.length !== 0) {
        setSelectedNoteId(nodes[0]);
        const foundNote = articleDetailReducer.articleDetail.notes.find((note) => note.id === selectedNoteId);

        setNoteFormData((originData) => ({
          ...originData,
          contents: foundNote?.contents || '',
          createdAt: foundNote?.createdAt || '',
        }));

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
          createdAt: foundConnection?.createdAt || '',
        }));

        setIsOpenUpdateConnectionModal(true);
      }
    },
    click: (event: any) => {
      const { nodes } = event;

      setSelectedNoteId(nodes[0]);
    },
  };

  const manipulation = {
    enabled: true,
    initiallyActive: true,

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
        createdAt: foundConnection?.createdAt || '',
      }));

      setIsOpenUpdateConnectionModal(true);
    },
    deleteEdge: (edgeData: VisSelectDelete, _callback: any) => {
      Swal.fire({
        title: '커넥션을 삭제하시겠습니까?',
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        cancelButtonColor: '#dcdcdc',
        confirmButtonColor: '#ff105f',
        showCancelButton: true,
        icon: 'warning',
        width: '35%',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteConnection.request({ id: edgeData.edges[0] }));
          Swal.fire('삭제되었습니다', '', 'success');
        }
      });
    },
  };

  const graph = {
    nodes: articleDetailReducer.articleDetail.notes.map((note) => ({ id: note.id, label: note.contents })),
    edges: articleDetailReducer.articleDetail.connections.map((connection) => ({
      id: connection.id,
      from: connection.leftNote,
      to: connection.rightNote,
    })),
  };

  return (
    <NoteGraphPresenter
      noteProps={{
        handleCreateNote,
        handleUpdateNote,
        handleDeleteNote,
        getSelectedNoteInfo,
        changeNoteFormData,
        isOpenCreateNoteModal,
        isOpenUpdateNoteModal,
        setIsOpenCreateNoteModal,
        setIsOpenUpdateNoteModal,
        noteFormData,
        selectedNoteId,
      }}
      connectionProps={{
        handleCreateConnection,
        handleUpdateConnection,
        changeConnectionFormData,
        isOpenCreateConnectionModal,
        isOpenUpdateConnectionModal,
        setIsOpenCreateConnectionModal,
        setIsOpenUpdateConnectionModal,
        connectionFormData,
      }}
      visProps={{ events, graph, manipulation }}
    />
  );
};

export default NoteGraphContainer;

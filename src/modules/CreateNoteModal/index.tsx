import TextInput from 'components/TextInput';
import React from 'react';

import styled from 'styled-components';

const CreateNoteModal = ({ register, handleCreateNote, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit(handleCreateNote)}>
        <TextInput type="text" label="content" register={register} required />
        <input type="submit" value="저장" />
      </form>
    </>
  );
};

export default CreateNoteModal;

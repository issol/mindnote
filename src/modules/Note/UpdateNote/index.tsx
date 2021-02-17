import TextInput from 'components/TextInput';
import React, { useEffect } from 'react';
import { UpdatedNoteInfo } from 'store/article/types';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  id: number;
  setIsUpdate: (isOpen: boolean) => void;
  register: ({ required }: { required?: boolean }) => RefReturn;
  contents: string;
  noteSetValue: any;
  handleUpdateNote: (data: UpdatedNoteInfo) => void;
  handleSubmit: Function;
};

const UpdateNote = ({ id, setIsUpdate, register, contents, noteSetValue, handleSubmit, handleUpdateNote }: Props) => {
  useEffect(() => {
    noteSetValue('contents', contents);
  }, [noteSetValue, contents]);
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateNote)}>
        <TextInput type="text" label="contents" register={register} required />
        <input type="hidden" value={id} name="id" ref={register({})} />
        <input type="submit" value="저장" />
        <button onClick={() => setIsUpdate(false)}>취소</button>
      </form>
    </>
  );
};

export default UpdateNote;

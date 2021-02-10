import React from 'react';

type Props = {
  statusMessage: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const StatusModal = ({ statusMessage, onClose }: Props) => {
  return (
    <>
      <div>{statusMessage}</div>
      <button onClick={onClose}>close</button>
    </>
  );
};

export default StatusModal;

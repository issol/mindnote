import React from 'react';

import styled from 'styled-components';

type Props = {
  id: number;
  reason: string;
  leftNote: number;
  rightNote: number;
  handleDeleteConnection: (connectionId: number) => () => void;
};

const ConnectionCard = ({ id, reason, leftNote, rightNote, handleDeleteConnection }: Props) => {
  return (
    <Card>
      <ConnectionReason>{reason}</ConnectionReason>
      <div>
        {leftNote}, {rightNote}
      </div>
      <button onClick={handleDeleteConnection(id)}>삭제</button>
    </Card>
  );
};

const Card = styled.div`
  background-color: white;

  width: 30%;
  padding: 20px;
  margin: 10px auto;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const ConnectionReason = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 15px;
  color: #2c2c2c;
`;

export default ConnectionCard;

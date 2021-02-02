import React, { useEffect, useState } from 'react';
import WriteArticlePresenter from './presenter';

const WriteArticleContainer = (props) => {
  const [state, setState] = useState();
  
  useEffect(() => {
    setState(props.location.state);
  });
  return <WriteArticlePresenter />;
};

export default WriteArticleContainer;

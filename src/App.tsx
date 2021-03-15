import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Root from 'router/Root';
import { logIn } from 'store/user/actions';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `token ${token}`;
      dispatch(logIn.success());
    } else {
      dispatch(logIn.failure(''));
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default Sentry.withProfiler(App);

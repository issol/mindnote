const HostDictionaryByEnv = {
  development: 'http://localhost:8000',
  production: 'http://localhost:8000',
};

export const HOST = HostDictionaryByEnv[process.env.NODE_ENV];

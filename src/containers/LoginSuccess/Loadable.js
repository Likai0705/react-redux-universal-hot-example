import React from 'react';
import Loadable from 'react-loadable';

const LoginSuccessLoadable = Loadable({
  loader: () => import('./LoginSuccess' /* webpackChunkName: 'loggin-success' */),
  loading: () => <div>Loading</div>
});

export default LoginSuccessLoadable;

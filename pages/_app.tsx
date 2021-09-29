import React from 'react';
import { AppProps } from 'next/app';

import Layout from '../components/templates/main'

import 'modern-css-reset/dist/reset.min.css';
import '../styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

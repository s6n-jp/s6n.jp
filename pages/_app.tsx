import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/templates/main'

import 'modern-css-reset/dist/reset.min.css';
import '../styles/index.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#fe3a7c" />
        <link rel="me" href="https://mstdn.maud.io/@s6n" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="s6n.jp" />
        <meta name="application-name" content="s6n.jp" />
        <meta name="msapplication-TileColor" content="#fe3a7c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>s6n.jp : engineering behind our web.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;

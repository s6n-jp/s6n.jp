import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppInitialProps } from 'next/app';

type DocumentProps = Document & AppInitialProps;

const AppDocument: React.FC<DocumentProps> = ({ ..._initialProps }) => {
  return (
    <Html lang="en">
      <Head>
        <title>Hi!</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default AppDocument

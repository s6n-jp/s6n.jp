import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'; // eslint-disable-line @next/next/no-document-import-in-page
import { AppInitialProps } from 'next/app';

type DocumentProps = Document & AppInitialProps;

const AppDocument: React.FC<DocumentProps> = () => {
  // noinspection HtmlRequiredTitleElement
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default AppDocument

import type { AppInitialProps } from 'next/app';
import type Document from 'next/document'; // eslint-disable-line @next/next/no-document-import-in-page
import { Head, Html, Main, NextScript } from 'next/document';
import type React from 'react';

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

export default AppDocument;

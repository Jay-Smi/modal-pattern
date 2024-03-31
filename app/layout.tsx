import '@mantine/core/styles.css';
import React, { Suspense } from 'react';
import { ColorSchemeScript, Loader } from '@mantine/core';

import { Providers } from './providers';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <Suspense fallback={<Loader type="dots" color="blue" size={50} />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}

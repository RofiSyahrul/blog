import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';

import { buildLinks, buildMeta } from '~/utils/server/head.server';
import {
  buildAppleAppMeta,
  buildAppleTouchStartupImageLinks,
  buildBaseMeta,
  buildManifestIconLinks,
  buildMSAppMeta
} from '~/utils/server/root.server';

export const meta: MetaFunction = () => {
  return {
    ...buildBaseMeta(),
    ...buildAppleAppMeta(),
    ...buildMSAppMeta(),
    ...buildMeta()
  };
};

export const links: LinksFunction = () => {
  return buildLinks(
    [],
    [
      {
        rel: 'manifest',
        href: '/manifest.json'
      },
      {
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: '/icons/favicon-196.png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/icons/apple-icon-180.png'
      },
      ...buildAppleTouchStartupImageLinks(),
      ...buildManifestIconLinks()
    ]
  );
};

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

function Document({ children, title }: DocumentProps) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin/');

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {!isAdmin && (
          <>
            <ScrollRestoration />
            <Scripts />
          </>
        )}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className='error-container'>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

type ErrorBoundaryProps = {
  error: Error;
};

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <Document title='Uh-oh!'>
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}

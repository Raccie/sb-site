import React, { lazy, Suspense } from 'react';

const LazyCV = lazy(() => import('./CV'));

const CV = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCV {...props} />
  </Suspense>
);

export default CV;

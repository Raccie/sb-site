import React, { lazy, Suspense } from 'react';

const LazyTechnology = lazy(() => import('./Technology'));

const Technology = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTechnology {...props} />
  </Suspense>
);

export default Technology;

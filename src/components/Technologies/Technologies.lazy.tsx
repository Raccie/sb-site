import React, { lazy, Suspense } from 'react';

const LazyTechnologies = lazy(() => import('./Technologies'));

const Technologies = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTechnologies {...props} />
  </Suspense>
);

export default Technologies;

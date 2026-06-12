import React, { Suspense } from 'react';

const LazyMain = React.lazy(() => import('./Main'));

/**
 * USAGE: Main description to complete.
 * @example
 * <Main /> 
 */
const Main = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMain {...props} />
  </Suspense>
);
Main.displayName = 'Main Lazy Loaded';

export default Main;

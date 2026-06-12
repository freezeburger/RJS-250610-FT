import React, { Suspense } from 'react';

const LazyImage = React.lazy(() => import('./Image'));

/**
 * USAGE: Image description to complete.
 * @example
 * <Image /> 
 */
const Image = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImage {...props} />
  </Suspense>
);
Image.displayName = 'Image Lazy Loaded';

export default Image;

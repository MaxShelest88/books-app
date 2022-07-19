import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {};

const BookSkeleton = (props: Props) => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={388}
      viewBox="0 0 200 388"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="5" y="7" rx="5" ry="5" width="180" height="288" />
      <rect x="5" y="300" rx="5" ry="5" width="180" height="25" />
      <rect x="5" y="335" rx="5" ry="5" width="180" height="35" />
    </ContentLoader>
  );
};

export default BookSkeleton;

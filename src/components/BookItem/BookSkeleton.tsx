import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {};

const BookSkeleton = (props: Props) => {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={356}
      viewBox="0 0 180 356"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="5" y="7" rx="5" ry="5" width="160" height="256" />
      <rect x="10" y="270" rx="5" ry="5" width="150" height="30" />
      <rect x="0" y="310" rx="5" ry="5" width="170" height="35" />
    </ContentLoader>
  );
};

export default BookSkeleton;

import React from 'react';
import { IconComponentsProps } from '../../../models/IconComponents';

const IconFavorite: React.FC<IconComponentsProps> = ({ color, size, ...props }) => {
  return (
    <svg width={size} height={size} fill={color} stroke="#3b3bf0" viewBox="0 0 50 50" {...props}>
      <path d="M32.187,8H17.813C16.259,8,15,9.259,15,10.813v30.65c0,0.174,0.209,0.262,0.333,0.141l9.058-8.789	c0.339-0.329,0.878-0.329,1.217,0l9.058,8.789C34.791,41.725,35,41.636,35,41.463v-30.65C35,9.259,33.741,8,32.187,8z M32.187,7	C34.293,7,36,8.707,36,10.813v30.641c0,1.061-1.275,1.6-2.036,0.861L25,33.618l-8.964,8.697C15.275,43.054,14,42.514,14,41.454	V10.813C14,8.707,15.707,7,17.813,7H32.187z" />
    </svg>
  );
};

export default IconFavorite;

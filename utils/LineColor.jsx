import React from 'react';
import classNames from 'classnames';

const CoolLine = () => {
  const lineClasses = classNames(
    'h-1',
    'w-full',
    'bg-gradient-to-r',
    'from-purple-500',
    'via-pink-500',
    'to-red-500'
  );

  return (
    <div>
      <div className={lineClasses}></div>
    </div>
  );
};

export default CoolLine;

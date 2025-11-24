
import React from 'react';

export default function Button({ name = 'click me', className, type = 'button', onClick, func }) {
  const handleClick = typeof onClick === 'function'
    ? onClick
    : (typeof func === 'function' ? func : undefined);

  return (
    <button
      type={type}
      className={className || 'btn btn-primary'}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

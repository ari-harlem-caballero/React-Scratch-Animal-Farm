import React from 'react';

export default function Animal({ name, type, says }) {
  return <div className='animal'>

    {/* <img alt={`${type}`} src={ `./animals/${type}.png` } /> */}

    <p>{name}</p>
    <p>{says}</p>

  </div>;
}

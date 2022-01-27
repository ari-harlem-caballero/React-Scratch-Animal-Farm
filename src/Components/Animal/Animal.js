import React from 'react';

export default function Animal({ name, type, says }) {
  return <div className='animal'>

    <img alt={`${type}`} src={ `./${type}.png` } width={100} />

    <p>{name}</p>
    <p>Says: {says}</p>

  </div>;
}

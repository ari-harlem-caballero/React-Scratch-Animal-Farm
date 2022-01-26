import React from 'react';
import Animal from './Animal/Animal.js'

export default function AnimalList(props) {
  return (
    {props.animals.map((animal, i) =>
      <Animal key={animal.type + i} {...animal} />)}
  );
//   .map loop thru Animals
//   each Animal needs: name, type, says, img (unique key to prop ea animal)
}

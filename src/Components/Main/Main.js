import React from 'react';
import backgroundImage from './background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <AnimalList animals={props.animals} />
    </main>
  );
//   import background image (like Zodiac)
//   needs animals from AnimalList
}

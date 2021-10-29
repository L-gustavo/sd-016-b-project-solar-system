import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((elem) => (
          <span key={ elem.name }>
            <PlanetCard planetName={ elem.name } planetImage={ elem.image } />
          </span>
        ))}
      </>
    );
  }
}

export default SolarSystem;
